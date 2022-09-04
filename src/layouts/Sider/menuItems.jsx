import { DashboardOutlined, UserOutlined } from "@ant-design/icons";

import { paths } from "../../constants";
import { languageKeys } from "../../i18n";

export const menuItems = [
  { key: paths.DASHBOARD, label: languageKeys.bang_dieu_khien, icon: <DashboardOutlined /> },
  { key: paths.USERS, label: languageKeys.nguoi_dung, icon: <UserOutlined /> },
];
