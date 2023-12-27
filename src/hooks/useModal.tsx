import { useEffect, useState } from "react";

interface IModalContainerProps {
  children?: JSX.Element | JSX.Element[];
  title?: string;
}

interface IUseModal {
  (callback?: () => void): {
    Modal: ({ children, title }: IModalContainerProps) => false | JSX.Element;
    openModal: () => void;
    closeModal: () => void;
  };
}

const useModal: IUseModal = (callback) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  const handleConfirm = () => {
    if (callback) callback();
    closeModal();
  };

  const Modal = ({ children, title }: IModalContainerProps) => {
    useEffect(() => {
      if (isOpen) document.body.style.overflow = "hidden";

      return () => {
        document.body.removeAttribute("style");
      };
    }, []);

    return (
      isOpen && (
        <div
          className="fixed left-0 top-0 z-[9999] flex h-screen w-screen items-center justify-center bg-black/30"
          onClick={(event) => {
            if (event.currentTarget === event.target) closeModal();
          }}
          role="presentation"
        >
          <div className="">
            <p className="text-center text-n-lg">{title}</p>
            <div className="py-10">{children}</div>
            <div className="flex justify-around">
              {callback && <button onClick={handleConfirm}>확인</button>}
              <button onClick={closeModal}>취소</button>
            </div>
          </div>
        </div>
      )
    );
  };

  return { Modal, openModal, closeModal };
};

export default useModal;
