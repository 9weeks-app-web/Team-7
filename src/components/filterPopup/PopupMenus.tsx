import { ForwardedRef, HTMLAttributes, forwardRef } from "react";

interface PopupMenusPros {
  isCategoryOpen: boolean;
  isSortOpen: boolean;
  isServiceOpen: boolean;
  isMenuHeight: boolean;
  handleCategoryClick: () => void;
  handleSortClick: () => void;
  handleServiceClick: () => void;
}

const PopupMenus = forwardRef(
  (
    {
      isCategoryOpen,
      isSortOpen,
      isServiceOpen,
      isMenuHeight,
      handleCategoryClick,
      handleSortClick,
      handleServiceClick,
    }: PopupMenusPros,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    return (
      <div
        className={`grid gap-s-1 p-s-1 bg-white${
          !isMenuHeight
            ? " border-b border-l border-t rounded-l-md shadow-shadow-2"
            : isCategoryOpen
              ? " rounded-l-md"
              : " rounded-md"
        }`}
        ref={ref}
      >
        <div className="relative cursor-pointer" onClick={handleCategoryClick}>
          <PopupMenuTitle isOpen={isCategoryOpen}>카테고리</PopupMenuTitle>
          <div className="absolute top-1/2 -translate-y-1/2 right-[14px]">
            {isCategoryOpen ? (
              <img src="/rightArrowPrimary.svg" alt="rightArrow" />
            ) : (
              <img src="/rightArrowNeutral.svg" alt="rightArrow" />
            )}
          </div>
        </div>
        <div className="grid gap-s-1">
          <div className="relative cursor-pointer" onClick={handleSortClick}>
            <PopupMenuTitle isOpen={isSortOpen}>정렬</PopupMenuTitle>
            <div className="absolute top-1/2 -translate-y-1/2 right-[14px]">
              {isSortOpen ? (
                <img src="/upArrowPrimary.svg" alt="upArrow" />
              ) : (
                <img src="/downArrowNeutral.svg" alt="downArrow" />
              )}
            </div>
          </div>
          {isSortOpen && (
            <div className="grid gap-s-1">
              <PopupMenuItem>인기순</PopupMenuItem>
              <PopupMenuItem>최신순</PopupMenuItem>
              <PopupMenuItem>팔로우한 작가만</PopupMenuItem>
            </div>
          )}
        </div>
        <div className="grid gap-s-1">
          <div className="relative cursor-pointer" onClick={handleServiceClick}>
            <PopupMenuTitle isOpen={isServiceOpen} isLast={!isServiceOpen}>
              추천 서비스
            </PopupMenuTitle>
            <div className="absolute top-1/2 -translate-y-1/2 right-[14px]">
              {isServiceOpen ? (
                <img src="/upArrowPrimary.svg" alt="upArrow" />
              ) : (
                <img src="/downArrowNeutral.svg" alt="downArrow" />
              )}
            </div>
          </div>
          {isServiceOpen && (
            <div className="grid gap-s-1">
              <PopupServiceTitle>무료 서비스</PopupServiceTitle>
              <div className="grid gap-s-1">
                <PopupMenuItem>스팩폴리오 Pick</PopupMenuItem>
              </div>
              <PopupServiceTitle>프리미엄 서비스</PopupServiceTitle>
              <div className="grid gap-s-1">
                <PopupMenuItem>전문가 포트폴리오</PopupMenuItem>
                <PopupMenuItem>합격자 포트폴리오</PopupMenuItem>
                <PopupMenuItem>공모전 수상</PopupMenuItem>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
);

interface popupMenuTitleProps extends HTMLAttributes<HTMLDivElement> {
  children: string;
  isLast?: boolean;
  isOpen: boolean;
}

const PopupMenuTitle = ({
  children,
  isLast,
  isOpen,
}: popupMenuTitleProps): JSX.Element => {
  return (
    <div
      className={`h-[44px] ${
        isOpen ? "text-primary-100" : "text-neutral-100"
      } text-2 flex items-center px-[14px] cursor-pointer${
        isLast ? "" : " border-b border-neutral-10"
      }`}
    >
      {children}
    </div>
  );
};

interface popupMenuItemProps extends HTMLAttributes<HTMLDivElement> {
  children: string;
}

const PopupMenuItem = ({ children }: popupMenuItemProps): JSX.Element => {
  return (
    <div className="h-[40px] text-neutral-60 font-semibold text-sm flex items-center px-[14px] cursor-pointer">
      {children}
    </div>
  );
};

interface popupServiceTitle {
  children: string;
}

const PopupServiceTitle = ({ children }: popupServiceTitle) => {
  return (
    <div className="h-[40px] text-neutral-70 font-semibold text-sm flex items-center px-[14px] border-b border-neutral-10">
      {children}
    </div>
  );
};

export default PopupMenus;
