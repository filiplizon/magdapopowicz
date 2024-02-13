import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Logo = () => {
  return (
    <StaticImage
      src="../../images/logo.png"
      alt="logo"
      height={50}
      width={50}
      placeholder="blurred"
    />
  );
};

export default Logo;
