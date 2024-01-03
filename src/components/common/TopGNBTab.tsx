import { useNavigate } from "react-router-dom";

interface topGNBTabProps {
  children: string;
  isSelected: boolean;
  to: string;
}

const TopGNBTab = ({
  children,
  isSelected,
  to,
}: topGNBTabProps): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div
      className={`w-[96px] flex items-center justify-center cursor-pointer${
        isSelected ? " border-b-2 border-primary-90" : ""
      }`}
      onClick={() => navigate(to)}
    >
      {children}
    </div>
  );
};

export default TopGNBTab;
