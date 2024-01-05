import { LeftBtn, LeftWrapper, RightBtn } from "./SuccessfulPortfolio.styles";
import { Link } from "react-router-dom";

const LeftContainer = ({ handleRightSlide, handleLeftSlide }: any) => {
  return (
    <LeftWrapper>
      <h3 className="text-[24px] mb-[10px]">
        <strong>취업에 성공한</strong>
        <br />
        포트폴리오만
        <br />
        모았어요
      </h3>
      <Link to="" className="text-[16px] block mb-[20px]">
        1,507건 모아보기 &gt;
      </Link>
      <div className="flex gap-[10px]">
        <LeftBtn onClick={handleLeftSlide}>
          <img src="/arrowLeft.svg" alt="왼쪽 버튼 누르기" />
        </LeftBtn>
        <RightBtn onClick={handleRightSlide}>
          <img src="/arrowRight.svg" alt="오른쪽 버튼 누르기" />
        </RightBtn>
      </div>
    </LeftWrapper>
  );
};

export default LeftContainer;
