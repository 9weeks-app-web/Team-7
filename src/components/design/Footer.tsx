import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => setIsOpen((prev) => !prev);

  return (
    <footer className="w-full">
      <div className="max-w-[1200px] m-auto grid items-center grid-cols-[82px_auto_102px] gap-[65px] h-[42px]">
        <div>
          <img width={82} src="/logoSfacENblack.svg" alt="logo" />
        </div>
        <div className="text-xs text-neutral-80 flex gap-[10px]">
          <div className="flex gap-[10px] cursor-pointer" onClick={handleOpen}>
            <span className="font-bold">인사이드아웃 사회적 협동조합</span>
            <div className="flex gap-s-1">
              <span>사업자 정보</span>
              <img
                src="/dropDown.svg"
                alt="dropDown"
                className={isOpen ? "rotate-180" : ""}
              />
            </div>
          </div>
          <div className="border-r border-neutral-20" />
          <div className="flex gap-s-2">
            <Link to="/">서비스소개</Link>
            <Link to="/">공지사항</Link>
            <Link to="/">개인정보처리방침</Link>
            <Link to="/">이용약관</Link>
            <Link to="/">환불 규정</Link>
            <Link to="/">고객센터</Link>
            <Link to="/">광고문의</Link>
          </div>
        </div>
        <div className="grid w-[102px] gap-s-2 grid-cols-3">
          <img src="/snsFacebook.svg" alt="Facebook" />
          <img src="/snsInstagram.svg" alt="Instagram" />
          <img src="/snsYouTube.svg" alt="YouTube" />
        </div>
      </div>
      {isOpen && (
        <div className="h-[42px] text-xs pb-[10px] text-neutral-40 grid gap-[10px]">
          <div className="flex gap-s-2">
            <span>고유번호: 324-82-00580</span>
            <span>이사장 : 엄민호 (와이엠에스코)</span>
            <span>통신판매업 신고번호 : 2022-경기김포-3659</span>
            <span>연락처 : 050-6683-1001</span>
            <span>
              주소: 서울특별시 강서구 마곡중앙2로 11, 3층 305호(마곡동, M밸리 W
              TOWER III)
            </span>
          </div>
          <div>
            <span>COPYRIGHTⓒ 주식회사 와이엠에스닷코 ALL RIGHTS RESERVED.</span>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
