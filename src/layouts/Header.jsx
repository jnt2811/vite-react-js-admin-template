import { css } from "@emotion/react";
import { Layout } from "antd";
import React from "react";

const Header = () => {
  return <Layout.Header css={styleHeader}>Header</Layout.Header>;
};

export default Header;

const styleHeader = css({
  backgroundColor: "white",
});
