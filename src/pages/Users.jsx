import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

import { resetPage, updatePage } from "../ducks/slices/page.slice";
import { UserList } from "../features";
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

  return (
    <div>
      <UserList />
    </div>
  );
};

export default Users;
