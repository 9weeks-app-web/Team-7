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
      <h2 className="text-[24px] text-neutral-100 font-semibold mb-[20px]">
        포트폴리오
      </h2>
      <span className="text-[16px] text-neutral-40">
        직무별 카테고리 및 필터
      </span>
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
