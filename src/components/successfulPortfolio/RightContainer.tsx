import {
  Hover,
  RightWrapper,
  SlideCard,
  SlideWrapper,
  TextBox,
} from "./SuccessfulPortfolio.styles";
import { banners } from "../../constants/SuccessfulPortfolio";

const RightContainer = ({ style }: any) => {
  return (
    <RightWrapper className="imgData">
      <SlideWrapper>
        <ul className="flex gap-[24px]" style={style}>
          {banners.map((item: any) => {
            return (
              <SlideCard key={item.id}>
                <Hover>
                  <img src="/lockCircle.svg" alt="logo" />
                  <div>
                    합격자 포트폴리오
                    <br />
                    보러가기
                  </div>
                </Hover>
                <TextBox>
                  <p className="mb-[6px] text-[12px] text-primary-90">
                    2022년 상반기 포트폴리오
                  </p>
                  <div className="flex flex-col gap-[10px] text-primary-90">
                    <div className="flex gap-[6px]">
                      <img
                        src={item.corporate}
                        alt="N"
                        className="w-[22px] h-[22px] bg-neutral-200 rounded-full"
                      />
                      <span className="text-[14px] font-semibold">
                        네카라쿠배직토당야 5곳 합격
                      </span>
                    </div>
                    <ul className="flex gap-[6px] text-neutral-50">
                      <li className="rounded-[4px] border border-neutral-10 py-[4px] px-[10px]">
                        영상/모션그래픽
                      </li>
                      <li className="rounded-[4px] border border-neutral-10 py-[4px] px-[10px]">
                        C4D
                      </li>
                    </ul>
                    <div className="flex gap-[6px]">
                      <img
                        src={item.corporate}
                        alt="N"
                        className="w-[34px] h-[34px] bg-neutral-200 rounded-full"
                      />
                      <div className="flex flex-col">
                        <strong className="text-[14px]">맥킨토시</strong>
                        <span className="text-neutral-40">PM</span>
                      </div>
                    </div>
                  </div>
                </TextBox>
                <img
                  src={`/${item.img}.png`}
                  alt="이미지1"
                  className="absolute"
                />
              </SlideCard>
            );
          })}
        </ul>
      </SlideWrapper>
    </RightWrapper>
  );
};

export default RightContainer;
