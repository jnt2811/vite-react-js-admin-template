import { css } from "@emotion/react";
import { Layout, Menu } from "antd";

import { menuItems } from "./menuItems";

const Sider = () => {
  return (
    <Layout.Sider css={styleSider}>
      <div css={styleLogo}>LOGO</div>

      <Menu theme="dark" items={menuItems} />
    </Layout.Sider>
  );
};

export default Sider;

const styleSider = css({
  height: "100vh",
  overflow: "auto",
  "*": {
    color: "#fff",
  },
});

const styleLogo = css({
  fontSize: 28,
  height: 60,
  lineHeight: "60px",
  paddingLeft: 15,
  fontWeight: "bold",
});
