import { NicknameItemsProps } from "../../types/nicknameTypes";

const NicknameItems = ({ children }: NicknameItemsProps): JSX.Element => {
  return <div className="flex flex-col">{children}</div>;
};

export default NicknameItems;
