import React from "react";
import img2 from "../../assets/render/02.png";
import img3 from "../../assets/render/03.png";

import max1 from "../../assets/productos/max 3 sobres/1.jpg";
import max2 from "../../assets/productos/max 3 sobres/2.JPG";
import max3 from "../../assets/productos/max 3 sobres/3.JPG";
import max4 from "../../assets/productos/max 3 sobres/4.JPG";
import max5 from "../../assets/productos/max 3 sobres/5.JPG";

import t1 from "../../assets/productos/trio 3 sobres/1.jpg";
import t2 from "../../assets/productos/trio 3 sobres/2.JPG";
import t3 from "../../assets/productos/trio 3 sobres/3.JPG";
import t4 from "../../assets/productos/trio 3 sobres/4.JPG";
import t5 from "../../assets/productos/trio 3 sobres/5.JPG";

import x1 from "../../assets/productos/xtrem 3 sobres/1.jpg";
import x2 from "../../assets/productos/xtrem 3 sobres/2.JPG";
import x3 from "../../assets/productos/xtrem 3 sobres/3.JPG";
import x4 from "../../assets/productos/xtrem 3 sobres/4.JPG";
import x5 from "../../assets/productos/xtrem 3 sobres/5.JPG";

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
          <img src={max1} alt="max1" />
          <img src={max2} alt="max2" />
          <img src={max3} alt="max3" />
          <img src={max4} alt="max4" />
          <img src={max5} alt="max5" />
        </Carousel>
        <h4>01. Titulo</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam natus
          facere quia numquam. Nam itaque optio iste dolore amet quis corporis
          accusantium? Corrupti nisi magni totam in iusto veniam perferendis
          veritatis ipsa consequuntur nobis. Perferendis veritatis ut unde
          harum, ducimus impedit aperiam dolore excepturi assumenda neque
          temporibus magnam magni dignissimos aspernatur vero at totam,
          explicabo beatae consequatur vel, tenetur nulla quia eius! Repellat
          provident id molestiae nemo! Voluptate, ullam iusto.
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
            <img src={t1} alt="t1" />
          </div>
          <div className="content__item-cr">
            <img src={t2} alt="t2" />
          </div>
          <div className="content__item-cr">
            <img src={t3} alt="t3" />
          </div>
          <div className="content__item-cr">
            <img src={t4} alt="t4" />
          </div>
          <div className="content__item-cr">
            <img src={t5} alt="t5" />
          </div>
        </Carousel>
        <h4>01. Titulo</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, eos
          blanditiis pariatur explicabo accusamus illo consectetur natus,
          magnam, aperiam laboriosam itaque quam! Ipsum cupiditate quia
          molestias delectus voluptatum nesciunt adipisci facere enim officia.
          Minus cum aspernatur doloremque neque nulla aliquid soluta debitis ut
          architecto eaque nisi dicta voluptate dolorum quasi suscipit, quidem
          possimus, commodi beatae corporis explicabo, fugit eos vitae?
          Necessitatibus harum accusantium id odit praesentium! Perspiciatis
          similique ipsa laudantium voluptatum ex qui eum unde placeat sapiente
          soluta aspernatur optio quisquam deleniti alias adipisci iure, dicta
          deserunt nemo architecto commodi tenetur! Molestiae fuga labore
          ducimus voluptatibus consequatur quo ipsam praesentium!
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
          interval="3700"
          minimized={false}
        >
          <div className="content__item-cr">
            <img src={x1} alt="x1" />
          </div>
          <div className="content__item-cr">
            <img src={x2} alt="x2" />
          </div>
          <div className="content__item-cr">
            <img src={x3} alt="x3" />
          </div>
          <div className="content__item-cr">
            <img src={x4} alt="x4" />
          </div>
          <div className="content__item-cr">
            <img src={x5} alt="x5" />
          </div>
        </Carousel>
        <h4>01. Titulo</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          accusamus vel, quasi maxime iusto necessitatibus libero reprehenderit
          quaerat hic earum debitis iure officiis nemo neque fugiat nobis labore
          eius omnis esse eos qui. Earum repellendus reprehenderit ab
          consequuntur recusandae omnis!
        </p>
      </div>
    </div>
  );
};
