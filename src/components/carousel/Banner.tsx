import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";

const Banner = (): JSX.Element => {
  const banners = [
    {
      id: 1,
      img: "pcEventBanner1",
      text: {
        title: "SFAC",
        context: "컨텐츠",
      },
    },
    {
      id: 2,
      img: "pcEventBanner2",
      text: {
        title: "SFAC",
        context: "컨텐츠",
      },
    },
    {
      id: 3,
      img: "pcEventBanner3",
      text: {
        title: "",
        context: "",
      },
    },
    {
      id: 4,
      img: "pcEventBanner4",
      text: {
        title: "당신의 상상을 현실로!",
        context: "컨텐츠",
      },
    },
    {
      id: 5,
      img: "pcEventBanner5",
      text: {
        title: "SFAC",
        context: "컨텐츠",
      },
    },
  ];

  const settings = {
    dots: true,
    speed: 1000,
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    variableWidth: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="w-[1200px] mx-auto">
      <SliderContainer>
        <StyledSlider
          {...settings}
          autoplay={true}
          centerMode={true}
          className="swiper"
        >
          {banners.map((item) => (
            <Slider key={item.id}>
              <div>
                <div className="absolute my-[32px] mx-[23px]">
                  <h3 className="text-2xl font-semibold">{item.text.title}</h3>
                  <p>{item.text.context}</p>
                </div>
                <img src={`/${item.img}.png`} alt="" />
              </div>
            </Slider>
          ))}
        </StyledSlider>
      </SliderContainer>
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;

  return (
    <div>
      <div
        className={className}
        style={{
          ...style,
          position: "absolute",
          left: "0px",
          width: "88px",
          height: "100%",
          zIndex: 9999,
          background:
            "linear-gradient(90deg, rgba(245,248,255,1) 0%, rgba(245,248,255,0.8) 40%, rgba(245,248,255,0.6) 70%, rgba(245,248,255,0) 100%)",
        }}
        onClick={onClick}
      >
        <img
          src="/BannerSlideLeft.svg"
          alt="배너 왼쪽으로 넘기기"
          className="block"
          style={{
            position: "absolute",
            left: "20px",
            top: "50%",
            transform: "translate(0, -50%)",
            zIndex: 9999,
            textAlign: "center",
          }}
        />
      </div>
    </div>
  );
};

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
        right: "0px",
        width: "88px",
        height: "100%",
        zIndex: 9999,
        background:
          "linear-gradient(90deg, rgba(245,248,255,0) 0%, rgba(245,248,255,0.8) 70%, rgba(245,248,255,0.8) 70%, rgba(245,248,255,1) 100%)",
      }}
      onClick={onClick}
    >
      <img
        src="/BannerSlideRight.svg"
        alt="배너 오른쪽으로 넘기기"
        className="block"
        style={{
          position: "absolute",
          width: "50px",
          right: "20px",
          top: "50%",
          transform: "translate(0, -50%)",
          zIndex: 9999,
          textAlign: "center",
        }}
      />
    </div>
  );
};

const SliderContainer = styled.div`
  position: relative;
`;

const StyledSlider = styled(Slider)`
  .slick-prev::before,
  .slick-next::before {
    content: none;
  }

  .slick-dots > li {
    width: 6px;
    height: 6px;
    border-radius: 50px;
    background-color: #99bdff;
    transition: all 0.3s;
  }

  .slick-dots > .slick-active {
    background-color: #0059ff;
    width: 15px;
  }

  .slick-dots > .slick-active > button:before,
  .slick-dots button:before {
    content: "";
  }

  .slick-slider {
    display: flex;
    justify-content: center;
  }

  .slick-list {
    margin: 0;
    padding: 0;
    height: 281px;
  }

  .slick-track {
    margin: 0;
    width: 500px;
    height: 281px;
  }

  .slick-slide {
    margin-left: 10px;
  }

  .slick-center {
    margin-right: 10px;
  }

  .slick-slide:not(.slick-center) {
    margin: 0;
  }
`;

export default Banner;
