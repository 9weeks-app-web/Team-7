export interface DetailFloatingButtonProps {
  iconActive: string;
  iconDefault: string;
  label: string;
  onClick: () => void;
  isActive: boolean;
  additionalContent?: React.ReactNode;
}
