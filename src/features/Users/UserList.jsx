import { useQuery } from "@tanstack/react-query";
import { Avatar, Table } from "antd";
import moment from "moment";
import { useMemo } from "react";

import { apis } from "../../constants";
import { mainApi } from "../../libs/apiInstances";

export const UserList = () => {
  const { data, isLoading, isError, error } = useQuery(["user-list"], () => {
    return mainApi.get(apis.GET_ALL_USERS);
  });

  const dataSource = useMemo(() => {
    if (isError) {
      console.log(error);
      return [];
    } else if (isLoading) {
      return [];
    }
    return data.data;
  }, [data, error, isError, isLoading]);

  const columns = [
    {
      dataIndex: "avatar",
      render: (data) => <Avatar src={data} />,
    },
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Created at",
      dataIndex: "createdAt",
      render: (data) => moment(data).format("DD/MM/YYYY"),
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={dataSource} loading={isLoading} rowKey="id" size="small" />
    </div>
  );
};
