import * as React from "react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <Logo />
        <Navigation />
        <button className="header__btn">
          <AiOutlineMenu />
        </button>
      </div>
    </header>
  );
};

export default Header;
