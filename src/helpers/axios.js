import axios from "axios";

let accessToken = null;

export const apiClientAuth = axios.create({
  baseURL: "http://103.183.75.27:6001/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "Application/json",
  },
});

apiClientAuth.interceptors.request.use(
  async (request) => {
    if (accessToken === null) {
      accessToken = JSON.parse(localStorage.getItem("access-token") || "{}");
    }

    if (accessToken) {
      request.headers.Authorization = `Bearer ${accessToken}`;
    } else {
      delete request.headers.Authorization;
    }

    return request;
  },
  (error) => {
    console.error(`API Error: `, error);
    throw error;
  }
);
