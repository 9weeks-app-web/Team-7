import { userLayoutProps } from "../../types/userLayout";

const UsersLayout = ({ children }: userLayoutProps): JSX.Element => {
  return <div className="max-w-[384px] m-auto my-[175px]">{children}</div>;
};

export default UsersLayout;
