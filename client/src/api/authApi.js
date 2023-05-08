import axiosClient from "./axiosClient";

export const authApi = {
  login(data) {
    console.log(data)
    const url = "/auth/login";
    return axiosClient.post(url, data);
  },
  checkToken(token) {
    const url = "/auth/checktoken";
    return axiosClient.get(url, {
      params:{
        token
      }
    });
  },
};