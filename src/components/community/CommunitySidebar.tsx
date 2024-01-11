import { ReactNode } from "react";

interface CommunitySidebarProps {
  children: ReactNode;
  spacing?: string;
}

const CommunitySidebar = ({
  children,
  spacing,
}: CommunitySidebarProps): JSX.Element => {
  return <aside className={`${spacing}`}>{children}</aside>;
};

export default CommunitySidebar;
