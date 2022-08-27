import { Layout } from "antd";
import React from "react";
import { css } from "@emotion/react";

const Header = () => {
  return <Layout.Header css={styleHeader}>Header</Layout.Header>;
};

export default Header;

const styleHeader = css({
  backgroundColor: "white",
});
