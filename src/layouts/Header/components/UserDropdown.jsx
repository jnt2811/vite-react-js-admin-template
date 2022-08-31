import { GlobalOutlined, LogoutOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
import { useTranslation } from "react-i18next";

const KEY_NGON_NGU = "LANGUAGE";

const menuItems = [
  {
    key: KEY_NGON_NGU,
    label: "Ngôn ngữ",
    icon: <GlobalOutlined />,
    children: [
      { key: "VIE", label: "Tiếng Việt" },
      { key: "ENG", label: "Tiếng Anh" },
    ],
  },
  { key: "LOGOUT", label: "Đăng xuất", icon: <LogoutOutlined /> },
];

export const UserDropdown = ({ children }) => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = val => {
    i18n.changeLanguage(val);
  };

  const handleSelectMenu = ({ key }) => {
    console.log(key);

    // switch (key) {
    //   case value:

    //     break;

    //   default:
    //     break;
    // }
  };

  return <Dropdown overlay={<Menu items={menuItems} onSelect={handleSelectMenu} />}>{children}</Dropdown>;
};
