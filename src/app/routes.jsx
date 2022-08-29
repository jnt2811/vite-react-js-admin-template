import { paths } from "../constants";
import { Dashboard, Users } from "./elements";

export const routes = [
  {
    path: paths.DASHBOARD,
    element: <Dashboard />,
  },
  {
    path: paths.USERS,
    element: <Users />,
  },
];
