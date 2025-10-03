import { api } from "@/config/axios-config";

export const usersGetMe = async () => {
  const res = await api("/users/getMe");
  return res.data;
};
