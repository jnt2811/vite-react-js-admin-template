import { PlusOutlined } from "@ant-design/icons";
import { css } from "@emotion/react";
import { Button } from "antd";
import React from "react";

const Dashboard = () => {
  const handleClick = () => {
    console.log("click");
  };

  return (
    <div>
      <h1 css={styleH1}>Dashboard</h1>

      <Button icon={<PlusOutlined />} type="primary" onClick={handleClick}>
        Click
      </Button>
    </div>
  );
};

export default Dashboard;

const styleH1 = css({
  color: "red",
});
