interface HandleViewerChangeProps {
  handleMenuOpen: () => void;
  isOpenMenu: boolean;
  handleViewerChange: (viewerState: string) => void;
}

const ProjectCategory = ({
  handleMenuOpen,
  isOpenMenu,
  handleViewerChange,
}: HandleViewerChangeProps): JSX.Element => {
  return (
    <div>
      <div className="flex gap-[6px] text-neutral-60 py-[26px] border-primary-40">
        <div className="text-neutral-70 border-2 border-neutral-40 rounded-full bg-white">
          <button className="flex items-center justify-between w-[120px] h-[36px] px-[16px]">
            <span>인기순</span>
            <img src="/projectHome/filterCategoryArrow_neutral90.svg" alt="" />
          </button>
        </div>
        <div className="text-neutral-70 border-2 border-neutral-30 rounded-full bg-white">
          <button className="flex items-center justify-between w-[120px] h-[36px] px-[16px]">
            <span>직군</span>
            <img src="/projectHome/filterCategoryArrow_neutral90.svg" alt="" />
          </button>
        </div>
        <div className="relative text-neutral-70 border-2 border-neutral-30 rounded-full bg-white">
          <button
            onClick={handleMenuOpen}
            className="flex items-center justify-between w-[120px] h-[36px] px-[16px]"
          >
            <span>보기</span>
            <img src="/projectHome/filterCategoryArrow_neutral90.svg" alt="" />
          </button>
          <ul
            className={`flex gap-[6px] flex-col rounded-[6px] bg-white absolute border border-line-gray-1 shadow-shadow-1 top-[46px] left-0 w-[242px] h-[98px] p-[6px] text-[14px] font-semibold ${
              isOpenMenu ? " opacity-100" : " opacity-0"
            }`}
          >
            <li className="hover:bg-bg-white hover:text-primary-70 rounded-[6px] transition-all">
              <button
                onClick={() => handleViewerChange("card")}
                className="w-full text-left py-[10px] px-[14px]"
              >
                카드형
              </button>
            </li>
            <li className="hover:bg-bg-white hover:text-primary-70 rounded-[6px] transition-all">
              <button
                onClick={() => handleViewerChange("list")}
                className="w-full text-left  py-[10px] px-[14px]"
              >
                한줄형
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCategory;
