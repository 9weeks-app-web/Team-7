import { Link } from "react-router-dom";

const LeftContainer = () => {
  return (
    <div className="w-[181px] text-primary-white py-[41px] pl-[20px] pr-[30px]">
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
    </div>
  );
};

export default LeftContainer;
