import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import OfferCard from "../Offer/Offer";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers__wrapper">
        <h4 className="offers__title">Korzyści</h4>
        <p className="offers__text">Co oferuje nasz projekt?</p>
      </div>
      <div className="offers__cards">
        <OfferCard title="Dostęp do platformy szkoleniowej" text="">
          <StaticImage
            className="offers__image"
            src="../../images/trading.webp"
            alt={""}
          />
        </OfferCard>
        <OfferCard title="Sygnały Tradingowe" text="">
          <StaticImage
            className="offers__image"
            src="../../images/trading.webp"
            alt={""}
          />
        </OfferCard>
        <OfferCard title="Warsztaty online i offline" text="">
          <StaticImage
            className="offers__image"
            src="../../images/trading.webp"
            alt={""}
          />
        </OfferCard>
      </div>
    </div>
  );
};

export default Offers;
