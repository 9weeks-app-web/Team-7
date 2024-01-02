import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import Join from "./Join";
import JoinEmail from "./JoinEmail";
import Nickname from "./Nickname";
import RedirectSignup from "./RedirectSignup";
import Onboarding from "./Onboarding";
import JoinComplete from "./JoinComplete";

const Signup = () => {
  const [searchParams] = useSearchParams();
  const step = searchParams.get("step");
  const type = searchParams.get("type");
  const signupData = useSelector((state: RootState) => state.join);

  if (type !== "email") return <Join />;

  switch (step) {
    case "1":
      return <JoinEmail />;
    case "2":
      if (!signupData?.joinState?.step1) return <RedirectSignup />;
      return <Nickname />;
    case "3":
      if (!signupData?.joinState?.step2) return <RedirectSignup />;
      return <Onboarding />;
    case "4":
      if (!signupData?.joinState?.step3) return <RedirectSignup />;
      return <JoinComplete />;
    default:
      return <JoinEmail />;
  }
};

export default Signup;
