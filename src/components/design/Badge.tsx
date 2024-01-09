import { FC, ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  width?: string;
  height?: string;
  border?: string;
  spacing?: string;
  font?: string;
  color?: string;
  customStyle?: string;
}

const Badge: FC<BadgeProps> = ({
  children,
  width = "auto",
  height = "auto",
  border = "rounded-[20px]",
  spacing = "px-[10px] py-[4px]",
  font = "text-xs font-semibold",
  color = "bg-primary-100 text-white",
  customStyle,
}) => {
  return (
    <div
      className={`badge  ${width} ${height} ${border} ${spacing} ${font} ${color} ${customStyle}`}
    >
      {children}
    </div>
  );
};

export default Badge;
