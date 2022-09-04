import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

import { resetPage, updatePage } from "../ducks/slices/page.slice";
import { languageKeys } from "../i18n";

const Users = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updatePage({ title: t(languageKeys.nguoi_dung) }));

    return () => {
      dispatch(resetPage());
    };
  }, [dispatch, t]);

  return <div style={{ height: "200vh" }}>Users</div>;
};

export default Users;
