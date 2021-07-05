import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Bg1 from "../../assets/carousel/01.jpeg";
import Bg2 from "../../assets/carousel/02.jpeg";
import Bg3 from "../../assets/carousel/03.jpeg";
import Bg4 from "../../assets/carousel/04.jpeg";
import Bg5 from "../../assets/carousel/05.jpeg";
import Bg6 from "../../assets/carousel/06.jpeg";

export const CarouselImg = () => {
  return (
    <Carousel
      autoPlay={true}
      showArrows={false}
      showStatus={false}
      dynamicHeight={false}
      showThumbs={false}
      infiniteLoop={true}
    >
      <div>
        <img alt="test" src={Bg1} />
      </div>
      <div>
        <img alt="test" src={Bg2} />
      </div>
      <div>
        <img alt="test" src={Bg3} />
      </div>
      <div>
        <img alt="test" src={Bg4} />
      </div>
      <div>
        <img alt="test" src={Bg5} />
      </div>
      <div>
        <img alt="test" src={Bg6} />
      </div>
    </Carousel>
  );
};
