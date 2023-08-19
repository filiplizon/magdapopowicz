import * as React from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Quote from "../Quote/Quote";
import BusinessStartGuide from "../BusinessStartGuide/BusinessStartGuide";

const Wrapper = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="wrapper__content">
        <Hero />
        <About />
        <Quote />
      </div>
    </div>
  );
};

export default Wrapper;
