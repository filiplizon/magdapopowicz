import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Wrapper from "../components/Wrapper/Wrapper";

const IndexPage: React.FC<PageProps> = () => {
  return <Wrapper />;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Magda Popowicz</title>;
