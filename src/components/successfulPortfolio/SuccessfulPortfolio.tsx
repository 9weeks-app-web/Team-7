import { useState } from "react";
import { banners } from "../../constants/banner";
import LeftContainer from "./LeftContainer";
import { SlideContainer } from "./SuccessfulPortfolio.styles";
import RightContainer from "./RightContainer";

const SuccessfulPortfolio = (): JSX.Element => {
  const [currentSlideIndex, setCurrentSlide] = useState(0);
  const [style, setStyle] = useState({
    transform: `translateX(-${270 * currentSlideIndex}px)`,
    transition: `all 0.4s ease-in-out`,
  });

  const handleRightSlide = () => {
    const nextIndex = currentSlideIndex + 1;

    if (nextIndex < banners.length - 1) {
      setCurrentSlide(nextIndex);
    } else {
      setCurrentSlide(0);
    }

    setStyle({
      transform: `translateX(-${270 * nextIndex}px)`,
      transition: "all 0.4s ease-in-out",
    });
  };

  const handleLeftSlide = () => {
    const prevIndex = currentSlideIndex - 1;

    if (prevIndex > 0) {
      setCurrentSlide(prevIndex);
    } else {
      setCurrentSlide(banners.length - 1);
    }

    setStyle({
      transform: `translateX(-${270 * prevIndex}px)`,
      transition: `all 0.4s ease-in-out`,
    });
  };

  return (
    <SlideContainer className="bg-primary-80">
      <LeftContainer
        handleRightSlide={handleRightSlide}
        handleLeftSlide={handleLeftSlide}
      />
      <RightContainer style={style} />
    </SlideContainer>
  );
};

export default SuccessfulPortfolio;
