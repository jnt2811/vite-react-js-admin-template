import { css } from "@emotion/react";
import { Avatar, Dropdown, Layout, Menu } from "antd";
import React from "react";

const Header = () => {
  return (
    <Layout.Header css={styleHeader}>
      <Dropdown overlay={<Menu items={[{ label: "alo" }]} />}>
        <Avatar></Avatar>
      </Dropdown>
    </Layout.Header>
  );
};

export default Header;

const styleHeader = css({
  backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
});
