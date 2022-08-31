import { GlobalOutlined, LogoutOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
import { useTranslation } from "react-i18next";

import { languageKeys, languages } from "../../../i18n";

const KEY_NGON_NGU = "LANGUAGE";
const KEY_TIENG_ANH = "ENG";
const KEY_TIENG_VIET = "VIE";
const KEY_DANG_XUAT = "LOGOUT";

export const UserDropdown = ({ children }) => {
  const { i18n, t } = useTranslation();

  const handleChangeLanguage = (val) => {
    i18n.changeLanguage(val);
  };

  const handleClickMenu = ({ key }) => {
    switch (key) {
      case KEY_TIENG_ANH:
        handleChangeLanguage(languages.tieng_anh);
        break;

      case KEY_TIENG_VIET:
        handleChangeLanguage(languages.tieng_viet);
        break;

      case KEY_DANG_XUAT:
        break;

      default:
        break;
    }
  };

  const menuItems = [
    {
      key: KEY_NGON_NGU,
      label: "Ngôn ngữ",
      icon: <GlobalOutlined />,
      children: [
        { key: KEY_TIENG_VIET, label: t(languageKeys.ngon_ngu_tieng_viet) },
        { key: KEY_TIENG_ANH, label: t(languageKeys.ngon_ngu_tieng_anh) },
      ],
    },
    { key: KEY_DANG_XUAT, label: "Đăng xuất", icon: <LogoutOutlined /> },
  ];

  return <Dropdown overlay={<Menu items={menuItems} onClick={handleClickMenu} />}>{children}</Dropdown>;
};
