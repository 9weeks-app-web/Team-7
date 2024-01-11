import { DetailFloatingButtonProps } from "../../types/detailFloatingButtonTypes";

const DetailFloatingButton: React.FC<DetailFloatingButtonProps> = ({
  iconActive,
  iconDefault,
  label,
  onClick,
  isActive,
  additionalContent,
}) => {
  return (
    <div className="flex flex-col gap-y-2.5 items-center" onClick={onClick}>
      <img
        className="w-[2.8125rem] h-[2.8125rem] rounded-full"
        src={`./public/${isActive ? `${iconActive}` : `${iconDefault}`}`}
        alt={iconDefault}
      />
      <span>{label}</span>
      {isActive && additionalContent}
    </div>
  );
};

export default DetailFloatingButton;
