import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { FaTiktok, FaInstagram } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__wrapper">
        <div className="hero__content">
          <h1 className="hero__heading">
            Cześć, nazywam się <span>Magda Popowicz</span>.
          </h1>
          <h2>Chętnie pokaże Ci jak dodatkowo zarabiać online.</h2>
          <p className="hero__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            similique accusantium possimus officia obcaecati consectetur hic
            saepe eius?
          </p>
          <div className="hero__links">
            <div className="hero__buttons">
              <button className="hero__btn">Dołącz teraz</button>
              <button className="hero__btn">Zobacz więcej</button>
            </div>

            <div className="hero__icons">
              <a href="" className="hero__icon">
                <FaInstagram />
              </a>
              <a href="" className="hero__icon">
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>
        <div className="hero__image"></div>
        <div className="hero__logo"></div>
      </div>
    </div>
  );
};

export default Hero;
