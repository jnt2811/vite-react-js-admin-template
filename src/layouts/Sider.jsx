import { css } from "@emotion/react";
import { Layout } from "antd";
import React from "react";

const Sider = () => {
  return <Layout.Sider css={styleSider}>
    
    
    Sider
    
    
    </Layout.Sider>;
};

export default Sider;

const styleSider = css({
  height: "100vh",
  overflow: "auto",
  "*": {
    color: "#fff",
  },
});
