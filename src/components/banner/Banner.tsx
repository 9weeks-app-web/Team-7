import Slider from "react-slick";
import { SliderContainer, StyledSlider } from "./Banner.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { banners } from "../../constants/banner";
import PrevArrow from "./PrevArrow";
import NextArrow from "./NextArrow";

const Banner = (): JSX.Element => {
  const settings = {
    dots: true,
    speed: 1000,
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    variableWidth: true,
    autoplay: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <SliderContainer className="w-[1200px] mx-auto">
      <div>
        <StyledSlider {...settings} className="swiper">
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
      </div>
    </SliderContainer>
  );
};

export default Banner;
