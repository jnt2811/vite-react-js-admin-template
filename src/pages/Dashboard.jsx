import React from "react";
import { css } from "@emotion/react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const Dashboard = () => {
  return (
    <div>
      <h1 css={styleH1}>Dashboard</h1>

      <Button icon={<PlusOutlined />} type="primary">
        Click
      </Button>
    </div>
  );
};

export default Dashboard;

const styleH1 = css({
  color: "red",
});
