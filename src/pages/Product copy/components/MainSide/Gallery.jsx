import React from "react";
import Slider from "react-slick";

// import "/slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

const settings = {
  customPaging: function (i) {
    return (
      <a>
        <img src={`/p${i + 1}.jpeg`} />
      </a>
    );
  },
  dots: true,
  dotsClass: "slick-dots slick-thumb",
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Gallery = () => {
  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src={"/p1.jpeg"} />
        </div>
        <div>
          <img src={"/p2.jpeg"} />
        </div>
        <div>
          <img src={"/p3.jpeg"} />
        </div>
      </Slider>
    </div>
  );
};

export default Gallery;
