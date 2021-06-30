import React, { useState } from "react";
import { CarouselImg } from "../header/CarouselImg";
import imgRender from "../../assets/render/01.png";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export const Productos = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div className="products">
      <CarouselImg />
      <div className="star">
        <img src={imgRender} alt="imgRender" />
      </div>
      <div className="products__item">
        <div className="desc">
          <h5>Producto</h5>
          <span>$95.25</span>
          <i className="far fa-heart"></i>
          <button onClick={onOpenModal}>Ver mas...</button>
        </div>
        <figure>
          <img src={imgRender} alt="imgRender" />
        </figure>
      </div>
      <div className="products__item">
        <div className="desc">
          <h5>Producto</h5>
          <span>$95.25</span>
          <i className="far fa-heart"></i>
          <button onClick={onOpenModal}>Ver mas...</button>
        </div>
        <figure>
          <img src={imgRender} alt="imgRender" />
        </figure>
      </div>
      <div className="products__item">
        <div className="desc">
          <h5>Producto</h5>
          <span>$95.25</span>
          <i className="far fa-heart"></i>
          <button onClick={onOpenModal}>Ver mas...</button>
        </div>
        <figure>
          <img src={imgRender} alt="imgRender" />
        </figure>
      </div>
      <div className="products__item">
        <div className="desc">
          <h5>Producto</h5>
          <span>$95.25</span>
          <i className="far fa-heart"></i>
          <button onClick={onOpenModal}>Ver mas...</button>
        </div>
        <figure>
          <img src={imgRender} alt="imgRender" />
        </figure>
      </div>
      <div className="products__item">
        <div className="desc">
          <h5>Producto</h5>
          <span>$95.25</span>
          <i className="far fa-heart"></i>
          <button onClick={onOpenModal}>Ver mas...</button>
        </div>
        <figure>
          <img src={imgRender} alt="imgRender" />
        </figure>
      </div>
      <div className="products__item">
        <div className="desc">
          <h5>Producto</h5>
          <span>$95.25</span>
          <i className="far fa-heart"></i>
          <button onClick={onOpenModal}>Ver mas...</button>
        </div>
        <figure>
          <img src={imgRender} alt="imgRender" />
        </figure>
      </div>
      <div className="products__item">
        <div className="desc">
          <h5>Producto</h5>
          <span>$95.25</span>
          <i className="far fa-heart"></i>
          <button onClick={onOpenModal}>Ver mas...</button>
        </div>
        <figure>
          <img src={imgRender} alt="imgRender" />
        </figure>
      </div>
      <div className="products__item">
        <div className="desc">
          <h5>Producto</h5>
          <span>$95.25</span>
          <i className="far fa-heart"></i>
          <button onClick={onOpenModal}>Ver mas...</button>
        </div>
        <figure>
          <img src={imgRender} alt="imgRender" />
        </figure>
      </div>
      <div className="products__item">
        <div className="desc">
          <h5>Producto</h5>
          <span>$95.25</span>
          <i className="far fa-heart"></i>
          <button onClick={onOpenModal}>Ver mas...</button>
        </div>
        <figure>
          <img src={imgRender} alt="imgRender" />
        </figure>
      </div>
      <div className="products__item">
        <div className="desc">
          <h5>Producto</h5>
          <span>$95.25</span>
          <i className="far fa-heart"></i>
          <button onClick={onOpenModal}>Ver mas...</button>
        </div>
        <figure>
          <img src={imgRender} alt="imgRender" />
        </figure>
      </div>
      <div className="products__item">
        <div className="desc">
          <h5>Producto</h5>
          <span>$95.25</span>
          <i className="far fa-heart"></i>
          <button onClick={onOpenModal}>Ver mas...</button>
        </div>
        <figure>
          <img src={imgRender} alt="imgRender" />
        </figure>
      </div>
      <div className="products__item">
        <div className="desc">
          <h5>Producto</h5>
          <span>$95.25</span>
          <i className="far fa-heart"></i>
          <button onClick={onOpenModal}>Ver mas...</button>
        </div>
        <figure>
          <img src={imgRender} alt="imgRender" />
        </figure>
      </div>
      <div className="products__item">
        <div className="desc">
          <h5>Producto</h5>
          <span>$95.25</span>
          <i className="far fa-heart"></i>
          <button onClick={onOpenModal}>Ver mas...</button>
        </div>
        <figure>
          <img src={imgRender} alt="imgRender" />
        </figure>
      </div>
      <div className="products__item">
        <div className="desc">
          <h5>Producto</h5>
          <span>$95.25</span>
          <i className="far fa-heart"></i>
          <button onClick={onOpenModal}>Ver mas...</button>
        </div>
        <figure>
          <img src={imgRender} alt="imgRender" />
        </figure>
      </div>
      <div className="products__item">
        <div className="desc">
          <h5>Producto</h5>
          <span>$95.25</span>
          <i className="far fa-heart"></i>
          <button onClick={onOpenModal}>Ver mas...</button>
        </div>
        <figure>
          <img src={imgRender} alt="imgRender" />
        </figure>
      </div>
      <div className="products__item">
        <div className="desc">
          <h5>Producto</h5>
          <span>$95.25</span>
          <i className="far fa-heart"></i>
          <button onClick={onOpenModal}>Ver mas...</button>
        </div>
        <figure>
          <img src={imgRender} alt="imgRender" />
        </figure>
      </div>
      <div className="products__item">
        <div className="desc">
          <h5>Producto</h5>
          <span>$95.25</span>
          <i className="far fa-heart"></i>
          <button onClick={onOpenModal}>Ver mas...</button>
        </div>
        <figure>
          <img src={imgRender} alt="imgRender" />
        </figure>
      </div>
      <div className="products__item">
        <div className="desc">
          <h5>Producto</h5>
          <span>$95.25</span>
          <i className="far fa-heart"></i>
          <button onClick={onOpenModal}>Ver mas...</button>
        </div>
        <figure>
          <img src={imgRender} alt="imgRender" />
        </figure>
      </div>
      <div className="products__item">
        <div className="desc">
          <h5>Producto</h5>
          <span>$95.25</span>
          <i className="far fa-heart"></i>
          <button onClick={onOpenModal}>Ver mas...</button>
        </div>
        <figure>
          <img src={imgRender} alt="imgRender" />
        </figure>
      </div>
      <div className="products__item">
        <div className="desc">
          <h5>Producto</h5>
          <span>$95.25</span>
          <i className="far fa-heart"></i>
          <button onClick={onOpenModal}>Ver mas...</button>
        </div>
        <figure>
          <img src={imgRender} alt="imgRender" />
        </figure>
      </div>
      <div className="products__item">
        <div className="desc">
          <h5>Producto</h5>
          <span>$95.25</span>
          <i className="far fa-heart"></i>
          <button onClick={onOpenModal}>Ver mas...</button>
        </div>
        <figure>
          <img src={imgRender} alt="imgRender" />
        </figure>
      </div>
      <div className="products__item">
        <div className="desc">
          <h5>Producto</h5>
          <span>$95.25</span>
          <i className="far fa-heart"></i>
          <button onClick={onOpenModal}>Ver mas...</button>
        </div>
        <figure>
          <img src={imgRender} alt="imgRender" />
        </figure>
      </div>
      <div className="products__item">
        <div className="desc">
          <h5>Producto</h5>
          <span>$95.25</span>
          <i className="far fa-heart"></i>
          <button onClick={onOpenModal}>Ver mas...</button>
        </div>
        <figure>
          <img src={imgRender} alt="imgRender" />
        </figure>
      </div>
      <div className="products__item">
        <div className="desc">
          <h5>Producto</h5>
          <span>$95.25</span>
          <i className="far fa-heart"></i>
          <button onClick={onOpenModal}>Ver mas...</button>
        </div>
        <figure>
          <img src={imgRender} alt="imgRender" />
        </figure>
      </div>
      <div className="products__item">
        <div className="desc">
          <h5>Producto</h5>
          <span>$95.25</span>
          <i className="far fa-heart"></i>
          <button onClick={onOpenModal}>Ver mas...</button>
        </div>
        <figure>
          <img src={imgRender} alt="imgRender" />
        </figure>
      </div>

      <Modal open={open} onClose={onCloseModal} center>
        <div className="modal">
          <div className="desc">
            <h6>Product</h6>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
              ut, corrupti tenetur eos temporibus neque mollitia ipsam odit
              natus, totam, beatae magni repellendus? Nobis aliquam possimus
              excepturi sunt eius quibusdam eum omnis non repellat dolore
              aliquid aspernatur nesciunt consequatur recusandae veritatis
              alias, laudantium eligendi. Eveniet quia dolore deserunt
              asperiores repellat.
            </p>
          </div>
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
              <img src={imgRender} alt="imgRender" />
            </div>
            <div className="content__item-cr">
              <img src={imgRender} alt="imgRender" />
            </div>
            <div className="content__item-cr">
              <img src={imgRender} alt="imgRender" />
            </div>
            <div className="content__item-cr">
              <img src={imgRender} alt="imgRender" />
            </div>
            <div className="content__item-cr">
              <img src={imgRender} alt="imgRender" />
            </div>
          </Carousel>
        </div>
      </Modal>
    </div>
  );
};
