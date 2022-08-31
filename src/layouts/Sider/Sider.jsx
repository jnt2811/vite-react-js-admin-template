import { css } from "@emotion/react";
import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";

import { menuItems } from "./menuItems";

const Sider = () => {
  const navigate = useNavigate();

  const handleChangeMenu = ({ key }) => {
    navigate(key);
  };

  return (
    <Layout.Sider css={styleSider}>
      <div css={styleLogo}>LOGO</div>

      <Menu theme="dark" items={menuItems} onSelect={handleChangeMenu} />
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
  fontSize: 30,
  height: 60,
  lineHeight: "60px",
  paddingLeft: 15,
  fontWeight: "500",
});
