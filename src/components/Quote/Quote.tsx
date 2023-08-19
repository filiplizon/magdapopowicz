import * as React from "react";

const Quote = () => {
  return (
    <section className="quote">
      <div className="quote__wrapper">
        <h2 className="quote__text">
          Nie siedź czekając, aż szansa do Ciebie przyjdzie.{" "}
          <span className="quote__text--underline">Wstań i stwórz ją.</span>
          <span className="quote__author">-- Madam C.J. Walker</span>
        </h2>
      </div>
    </section>
  );
};

export default Quote;
