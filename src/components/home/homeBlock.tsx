import React from "react";
import logos from "../../assets/logos.jpg";
import frog from "../../assets/frog.jpg";
import { TfiArrowCircleRight } from "react-icons/tfi";
const HomeBlock = function () {
  return (
    <div className="home-block">
      <div className="home-block__left">
        <img src={logos} alt="logos" />
        <div className="home-block__left-container">
          <h1 className="home-block__left-title">
            <h1 className="home-block__left-title-green">Stan Smith<span>,</span></h1> Forever!
          </h1>

          <li className="home-block__left-button">Купить</li>
        </div>
      </div>

      <div className="home-block__right">
        <img src={frog} alt="frog" />
        <TfiArrowCircleRight className="home-block__right-arrow"/>
      </div>
    </div>
  );
};

export default HomeBlock;
