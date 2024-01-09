import { categoryJobs } from "../../constants/categoryJobs";

interface CategoryListPopupProps {
  handleCloseModal: () => void;
}

const CategoryListPopup = ({ handleCloseModal }: CategoryListPopupProps) => {
  const handleInnerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div onClick={handleCloseModal} className="absolute">
      <div className="bg-[#80808030] fixed w-full h-[100vh] left-0 top-0">
        <div
          onClick={handleInnerClick}
          className="bg-primary-white w-[801px] h-[367px] p-[30px] rounded-[6px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        >
          <h3 className="text-neutral-90 text-[20px] font-semibold mb-[20px]">
            포트폴리오 카테고리 모아보기
          </h3>
          <ul className="flex bg-primary-white gap-x-[7px] gap-y-[9px] flex-wrap text-primary-white">
            {categoryJobs.map((job) => (
              <li
                key={job.name}
                className="w-[180px] h-[59px] flex items-center justify-center rounded-[6px] overflow-hidden  hover:bg-red-300"
              >
                <button
                  onClick={() => {}} // 카테고리 클릭 시, 해당 카테고리 작업물들 보여주게 만들기
                  className="w-full h-[59px] flex items-center justify-center"
                >
                  {job.name !== "전체" ? (
                    <div
                      className={`flex w-[180px] h-[59px] justify-center items-center`}
                    >
                      <img src={`categoryJobs/${job.openImg}`} alt={job.name} />
                      <span className="absolute w-[180px] h-[59px] leading-[59px] rounded-[6px] hover:bg-primary-90">
                        {job.name}
                      </span>
                    </div>
                  ) : (
                    <span className="absolute w-[180px] h-[59px] bg-primary-90 flex items-center justify-center rounded-[6px]">
                      전체
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoryListPopup;
