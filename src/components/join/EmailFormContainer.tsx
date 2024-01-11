import { JoinFormContainerProps } from "../../types/joinFormTypes";

const EmailFormContainer = ({
  children,
}: JoinFormContainerProps): JSX.Element => {
  return <div className="max-w-[384px] m-auto">{children}</div>;
};

export default EmailFormContainer;
