import { Link } from "react-router-dom";
import { registerInfoButtonProps } from "../../types/homeTypes";

const RegisterInfoButton = ({
  children,
  isLogin,
  to,
}: registerInfoButtonProps) => {
  const loginStyle = "text-neutral-90 border border-neutral-10";
  const signupStyle = "bg-neutral-90 text-white";

  return (
    <Link
      to={to}
      className={`px-s-3 py-[10px] text-2xl rounded-full ${
        isLogin ? loginStyle : signupStyle
      }`}
    >
      {children}
    </Link>
  );
};

export default RegisterInfoButton;
