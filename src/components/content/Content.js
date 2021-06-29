import React from "react";
import img1 from "../../assets/render/01.png";
import img2 from "../../assets/render/02.png";
import img3 from "../../assets/render/03.png";

export const Content = () => {
  return (
    <div className="content">
      <div className="content__box">
        <img src={img1} alt="img1" />
        <h4>01. Titulo</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vero
          error explicabo, assumenda quam quasi.
        </p>
      </div>
      <div className="content__box">
        <img src={img2} alt="img2" />
        <h4>01. Titulo</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vero
          error explicabo, assumenda quam quasi.
        </p>
      </div>
      <div className="content__box">
        <img src={img3} alt="img3" />
        <h4>01. Titulo</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vero
          error explicabo, assumenda quam quasi.
        </p>
      </div>
    </div>
  );
};
