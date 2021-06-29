import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Bg1 from "../../assets/FOTOS PRODUCTOS/ARP09649.JPG";
import Bg2 from "../../assets/FOTOS PRODUCTOS/ARP09650.JPG";
import Bg3 from "../../assets/FOTOS PRODUCTOS/ARP09651.JPG";
import Bg4 from "../../assets/FOTOS PRODUCTOS/ARP09652.JPG";

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
    </Carousel>
  );
};
