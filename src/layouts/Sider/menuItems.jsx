import { DashboardOutlined, UserOutlined } from "@ant-design/icons";

import { paths } from "../../constants";

export const menuItems = [
  { key: paths.DASHBOARD, label: "Dashboard", icon: <DashboardOutlined /> },
  { key: paths.USERS, label: "Users", icon: <UserOutlined /> },
];
