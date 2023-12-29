import { useEffect, useState } from "react";
import ModalButton from "../components/design/ModalButton";

interface modalContainerProps {
  children?: JSX.Element | JSX.Element[];
  confrimLabel?: string;
  cancelLabel?: string;
}

interface useModal {
  (callback?: () => void): {
    Modal: ({
      children,
      confrimLabel,
      cancelLabel,
    }: modalContainerProps) => false | JSX.Element;
    openModal: () => void;
    closeModal: () => void;
    handleConfirm: () => void;
  };
}

const useModal: useModal = (callback) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  const handleConfirm = () => {
    if (callback) callback();
    closeModal();
  };

  const Modal = ({
    children,
    confrimLabel,
    cancelLabel,
  }: modalContainerProps) => {
    useEffect(() => {
      if (isOpen) document.body.style.overflow = "hidden";

      return () => {
        document.body.removeAttribute("style");
      };
    }, []);

    return (
      isOpen && (
        <div
          className="fixed left-0 top-0 z-[9999] flex h-screen w-screen items-center justify-center bg-black/50"
          onClick={(event) => {
            if (event.currentTarget === event.target) closeModal();
          }}
          role="presentation"
        >
          <div className="w-[384px] rounded-md py-[33px] px-[53px] bg-primary-white shadow-shadow-3 grid gap-s-2">
            <div className="flex flex-col items-center">{children}</div>
            {(cancelLabel || confrimLabel) && (
              <div className="grid grid-cols-2 gap-s-1">
                {cancelLabel && (
                  <ModalButton onClick={closeModal}>{cancelLabel}</ModalButton>
                )}
                {confrimLabel && callback && (
                  <ModalButton onClick={handleConfirm} color="blue">
                    {confrimLabel}
                  </ModalButton>
                )}
              </div>
            )}
          </div>
        </div>
      )
    );
  };

  return { Modal, openModal, closeModal, handleConfirm };
};

export default useModal;
