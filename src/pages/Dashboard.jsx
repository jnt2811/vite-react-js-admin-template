import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

import { resetPage, updatePage } from "../ducks/slices/page.slice";
import { languageKeys } from "../i18n";

const Dashboard = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updatePage({ title: t(languageKeys.bang_dieu_khien) }));

    return () => {
      dispatch(resetPage());
    };
  }, [dispatch, t]);

  const handleClick = () => {
    console.log("click");
  };

  return (
    <div>
      <Button icon={<PlusOutlined />} type="primary" onClick={handleClick}>
        Click
      </Button>
    </div>
  );
};

export default Dashboard;
