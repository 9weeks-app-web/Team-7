import Slider from "react-slick";
import styled from "styled-components";

export const SliderContainer = styled.div`
  position: relative;
`;

export const StyledSlider = styled(Slider)`
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
