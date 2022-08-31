import { LeftOutlined } from "@ant-design/icons";
import { css } from "@emotion/react";
import { Avatar, Button, Layout, Space, Typography } from "antd";
import React from "react";

import { UserDropdown } from "./components/UserDropdown";

const Header = () => {
  return (
    <Layout.Header css={styleHeader}>
      <Space>
        <Button icon={<LeftOutlined />} shape="circle" type="text"></Button>

        <Typography.Title level={3} css={styleTitle}>
          Title
        </Typography.Title>
      </Space>

      <UserDropdown>
        <Avatar css={styleAvatar}>N</Avatar>
      </UserDropdown>
    </Layout.Header>
  );
};

export default Header;

const styleHeader = css({
  backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingInline: 20,
});

const styleAvatar = css({
  cursor: "pointer",
});

const styleTitle = css({
  margin: "0px !important",
});
