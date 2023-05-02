import axios from "axios";

import { getAccessToken } from "../utiles/aauthToken";

const axiosInstance = axios.create({
  baseURL: "https://api.midasehealth.com/",
});

axiosInstance.interceptors.request.use(
  function (config) {
    const accessToken = getAccessToken();

    config.headers["Content-Type"] = "application/json";

    if (accessToken) {
      config.headers[
        "Authorization"
      ] = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImJpd2FzaEBnbWFpbC5jb20iLCJpYXQiOjE2ODIyNDgwNjUsImV4cCI6MTY4MjI1MTY2NX0.gLCh2xDiVKazCrm7Io6yi3nWrKGzXEzGnv3sGYw_Dgo`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
