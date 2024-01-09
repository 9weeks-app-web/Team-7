import { ReactNode } from "react";

interface CustomCardProps {
  children: ReactNode;
  width?: string;
  height?: string;
  border?: string;
  color?: string;
  spacing?: string;
  customStyle?: string;
}

const Card = ({
  children,
  width = "w-[361px]",
  height = "h-[291px]",
  border = "rounded-md",
  color = "bg-white",
  spacing = "p-[20px]",
  customStyle,
}: CustomCardProps) => {
  return (
    <div
      className={`card ${width} ${height} ${border} ${color} ${spacing} ${customStyle}`}
    >
      {children}
    </div>
  );
};
export default Card;
