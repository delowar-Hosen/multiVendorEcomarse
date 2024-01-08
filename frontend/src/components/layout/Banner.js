import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Images from "./Images";

const Banner = () => {
  const [activeSlider, setActiveSlider] = useState(0);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (next) => {
      setActiveSlider(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "8%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === activeSlider
            ? {
                width: "30px",
                color: "#262626",
                borderRight: "3px  #262626 solid",
                padding: "10px 0",
              }
            : {
                width: "0",
                color: "transparent",
                borderRight: "transparent",
                padding: "10px 0",
              }
        }
      >
        0{i + 1}
      </div>
    ),
  };
  return (
    <div className="mx-auto w-full">
      <Slider {...settings}>
        <Link to="#">
          <Images className="block outline-0" imagesrc="assests/banner.png" />
        </Link>
        <Link to="#">
          <Images className="block outline-0" imagesrc="assests/banner.png" />
        </Link>
        <Link to="#">
          <Images className="block outline-0" imagesrc="assests/banner.png" />
        </Link>
      </Slider>
    </div>
  );
};

export default Banner;
