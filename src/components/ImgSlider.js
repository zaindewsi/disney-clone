import styled from "styled-components";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

const ImgSlider = (props) => {
let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
};

  return (
      <Carousel {...settings}>
      <Wrap>
        <a>
          <img src = "/images/slider-badging.jpg" alt = "" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src = "/images/slider-scale.jpg" alt = "" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src = "/images/slider-badag.jpg" alt = "" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src = "/images/slider-scales.jpg" alt = "" />
        </a>
      </Wrap>
      
      </Carousel>
  );
};

const Carousel = styled(Slider)`
  margin-top: 20px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150 150 150)
    }
  }

  li.slick-active button:before {
    color: #f9f9f9;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }
`;

const Wrap = styled.div`
  border-radius: 5px;
  position: relative;

  a {
    border-radius: 5px;
    box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px, rgb(0 0 0 / 73%) 0 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;

  img {
    width: 100%;
    height: 100%;
  }

  &:hover {
    padding: 0;
    border: 2px solid #f9f9f9;
    transition-duration: 300ms
  }
  }
`;

export default ImgSlider;