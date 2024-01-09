import { Link } from "react-router-dom";

const LeftContainer = () => {
  return (
    <div className="w-[181px] text-neutral-80 py-[41px] pl-[20px] pr-[30px]">
      <h3 className="text-[24px] mb-[10px]">
        <strong>요즘 HOT한</strong>
        <br />
        크리에이터를
        <br />
        만나보세요
      </h3>
      <Link to="" className="text-[16px] block mb-[20px]">
        327명 모아보기 &gt;
      </Link>
    </div>
  );
};

export default LeftContainer;
