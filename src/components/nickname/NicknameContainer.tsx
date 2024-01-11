import { NicknameContainerProps } from "../../types/nicknameTypes";

const NicknameContainer = ({
  children,
}: NicknameContainerProps): JSX.Element => {
  return <div className="max-w-[384px] m-auto">{children}</div>;
};

export default NicknameContainer;
