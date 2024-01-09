import { useState } from "react";
import ModalPopup from "./ModalPopup";
import CategoryListSlide from "./CategoryListSlide";
import CategoryListPopup from "./CategoryListPopup";

const ModalContainer = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <CategoryListSlide handleOpenModal={handleOpenModal} />
      <ModalPopup>
        {isOpenModal && (
          <CategoryListPopup handleCloseModal={handleCloseModal} />
        )}
      </ModalPopup>
    </>
  );
};

export default ModalContainer;
