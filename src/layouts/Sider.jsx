import { Layout } from "antd";
import React from "react";
import { css } from "@emotion/react";

const Sider = () => {
  return <Layout.Sider css={styleSider}>Sider</Layout.Sider>;
};

export default Sider;

const styleSider = css({
  height: "100vh",
  overflow: "auto",
  "*": {
    color: "#fff",
  },
});
