import { JoinFormItemsProps } from "../../types/joinFormTypes";

const EmailFormItems = ({
  children,
  className,
}: JoinFormItemsProps): JSX.Element => {
  return (
    <div className={`flex flex-col mb-[20px] w-full gap-[6px] ${className}`}>
      {children}
    </div>
  );
};

export default EmailFormItems;
