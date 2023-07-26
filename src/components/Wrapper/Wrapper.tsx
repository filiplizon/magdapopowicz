import * as React from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";

const Wrapper = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="wrapper__content">
        <Hero />
      </div>
    </div>
  );
};

export default Wrapper;
