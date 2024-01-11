import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RedirectSignup = (): JSX.Element => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/signup?type=email&step=1");
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return <></>;
};

export default RedirectSignup;
