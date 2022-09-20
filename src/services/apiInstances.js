import axios from "axios";

import { keys } from "../constants";

const mainInstance = axios.create({
  baseURL: "https://62e79d910e5d74566af825ad.mockapi.io/api/public/",
  timeout: 10000,
});

mainInstance.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem(keys.ACCESS_TOKEN);

    config.headers = {
      Authorization: `Bearer ${accessToken}`,
      Accept: "application/json",
    };

    return config;
  },
  (error) => Promise.reject(error),
);

mainInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;

      const accessToken = await refreshAccessToken();

      axios.defaults.headers.common["Authorization"] = "Bearer " + accessToken;

      return mainInstance(originalRequest);
    }

    return Promise.reject(error);
  },
);

const refreshAccessToken = async () => {
  return "";
};

export { mainInstance };
