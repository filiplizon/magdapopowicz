import * as React from "react";

const OfferCard = ({ title, text, children }: any) => {
  return (
    <div className="offer">
      {children}
      <div className="offer_wrapper">
        <h3 className="offer__heading">{title}</h3>
        <p className="offer__text">
          {text}Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Blanditiis accusamus consequatur sequi ipsa illo obcaecati sint culpa
          veniam sit aliquid? Quia temporibus exercitationem tempora velit porro
          commodi! Suscipit, obcaecati dolorem.
        </p>
      </div>
    </div>
  );
};

export default OfferCard;
