import * as React from "react";
import { FaTiktok, FaInstagram } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__wrapper">
        <div className="hero__content">
          <h1 className="hero__heading">
            Cześć, nazywam się <span>Magda Popowicz.</span>
          </h1>
          <h2>Chętnie pokaże Ci jak dodatkowo zarabiać online.</h2>
          <p className="hero__text">
            Jeśli chcesz wykorzystać możliwości dwudziestego pierwszego wieku,
            stać się całkowicie niezależną osobą oraz zarabiać z każdego miejsca
            na ziemi, <span>bardzo dobrze trafiłeś/aś</span>.
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
    </section>
  );
};

export default Hero;
