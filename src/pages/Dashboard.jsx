import { PlusOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import React from "react";

const Dashboard = () => {
  const handleClick = () => {
    console.log("click");
  };

  return (
    <div>
      <Typography.Title level={3}>Dashboard</Typography.Title>

      <Button icon={<PlusOutlined />} type="primary" onClick={handleClick}>
        Click
      </Button>
    </div>
  );
};

export default Dashboard;
