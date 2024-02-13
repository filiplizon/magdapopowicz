import * as React from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Quote from "../Quote/Quote";
import BusinessStartGuide from "../BusinessStartGuide/BusinessStartGuide";
import Offers from "../Offers/Offers";

const Wrapper = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="wrapper__content">
        <Hero />
        <About />
        <BusinessStartGuide />
        <Quote />
        <Offers />
      </div>
    </div>
  );
};

export default Wrapper;
