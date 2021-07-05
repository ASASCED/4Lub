import React from "react";
import { CarouselImg } from "../header/CarouselImg";

export const Main = () => {
  return (
    <main>
      <div className="first">
        <hgroup className="animate__animated animate__fadeIn">
          <h2>Lorem, ipsum....</h2>
          <h3>LOREM, IPSUM DOLOR.</h3>
        </hgroup>
        <p className="animate__animated animate__fadeIn">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi earum
          maxime tempora repellat aliquam deserunt labore officiis ipsa libero
          soluta?
        </p>
        <button>DESCUBRE</button>
      </div>
      <CarouselImg />
    </main>
  );
};
