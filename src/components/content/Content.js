import React from "react";
import img1 from "../../assets/render/01.png";
import img2 from "../../assets/render/02.png";
import img3 from "../../assets/render/03.png";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export const Content = () => {
  return (
    <div className="content">
      <div className="content__box">
        <Carousel
          autoPlay={true}
          showArrows={false}
          showStatus={false}
          dynamicHeight={false}
          showThumbs={false}
          infiniteLoop={true}
          interval="3100"
        >
          <div className="content__item-cr">
            <img src={img1} alt="img1" />
          </div>
          <div className="content__item-cr">
            <img src={img1} alt="img1" />
          </div>
          <div className="content__item-cr">
            <img src={img1} alt="img1" />
          </div>
          <div className="content__item-cr">
            <img src={img1} alt="img1" />
          </div>
          <div className="content__item-cr">
            <img src={img1} alt="img1" />
          </div>
        </Carousel>
        <h4>01. Titulo</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vero
          error explicabo, assumenda quam quasi.
        </p>
      </div>
      <div className="content__box">
        <Carousel
          autoPlay={true}
          showArrows={false}
          showStatus={false}
          dynamicHeight={false}
          showThumbs={false}
          infiniteLoop={true}
          interval="3300"
        >
          <div className="content__item-cr">
            <img src={img2} alt="img2" />
          </div>
          <div className="content__item-cr">
            <img src={img2} alt="img2" />
          </div>
          <div className="content__item-cr">
            <img src={img2} alt="img2" />
          </div>
          <div className="content__item-cr">
            <img src={img2} alt="img2" />
          </div>
          <div className="content__item-cr">
            <img src={img2} alt="img2" />
          </div>
        </Carousel>
        <div className="desc">
          <h4>01. Titulo</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vero
            error explicabo, assumenda quam quasi.
          </p>
        </div>
      </div>
      <div className="content__box">
        <Carousel
          autoPlay={true}
          showArrows={false}
          showStatus={false}
          dynamicHeight={false}
          showThumbs={false}
          infiniteLoop={true}
          interval="3700"
        >
          <div className="content__item-cr">
            <img src={img3} alt="img3" />
          </div>
          <div className="content__item-cr">
            <img src={img3} alt="img3" />
          </div>
          <div className="content__item-cr">
            <img src={img3} alt="img3" />
          </div>
          <div className="content__item-cr">
            <img src={img3} alt="img3" />
          </div>
          <div className="content__item-cr">
            <img src={img3} alt="img3" />
          </div>
        </Carousel>
        <h4>01. Titulo</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vero
          error explicabo, assumenda quam quasi.
        </p>
      </div>
    </div>
  );
};
