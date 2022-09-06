import { css } from "@emotion/react";
import { Layout, Menu } from "antd";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

import { menuItems } from "./menuItems";

const Sider = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [activeMenuKey, setActiveMenuKey] = useState("");

  const loopMenuArray = useCallback((menuArray = [], pathname = "", activeItem = "") => {
    for (let i = 0; i < menuArray.length; i++) {
      const menuItem = menuArray[i];

      const isParent = !!menuItem.children && Array.isArray(menuItem.children) && menuItem.children.length > 0;
      const isMatchPathname = menuItem.key === pathname;

      if (isParent) {
        loopMenuArray(menuItem.children, pathname, activeItem);
      } else if (isMatchPathname) {
        activeItem.key = menuItem.key;
        break;
      }
    }
  }, []);

  const getActiveKey = useCallback(() => {
    let activeItem = {};

    loopMenuArray(menuItems, pathname, activeItem);

    return activeItem?.key || "";
  }, [loopMenuArray, pathname]);

  useEffect(() => {
    if (!activeMenuKey) {
      const key = getActiveKey();
      setActiveMenuKey(key);
    }
  }, [activeMenuKey, getActiveKey]);

  const handleChangeMenu = ({ key }) => {
    setActiveMenuKey(key);
    navigate(key);
  };

  return (
    <Layout.Sider css={styleSider}>
      <div css={styleLogo}>LOGO</div>

      <Menu
        theme="dark"
        items={menuItems.map((item) => ({ ...item, label: t(item.label) }))}
        onSelect={handleChangeMenu}
        selectedKeys={[activeMenuKey]}
      />
    </Layout.Sider>
  );
};

export default Sider;

const styleSider = css({
  height: "100vh",
  overflow: "auto",
  position: "sticky",
  top: 0,
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
