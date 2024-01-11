interface ModalPopupProps {
  children: React.ReactNode;
}

const ModalPopup = ({ children }: ModalPopupProps) => {
  return <div className="absolute right-0 z-[100]">{children}</div>;
};

export default ModalPopup;
