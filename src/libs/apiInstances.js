import axios from "axios";

export const mainApi = axios.create({
  baseURL: "https://62e79d910e5d74566af825ad.mockapi.io/api/public/",
});
