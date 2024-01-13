import { apiClientAuth } from "@/helpers/axios";

export const login = (payload) => {
  return apiClientAuth({
    method: "post",
    url: "/auth/login",
    data: payload,
  });
};
