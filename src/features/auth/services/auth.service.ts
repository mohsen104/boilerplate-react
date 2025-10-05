import { api } from "@/config/axios-config";

export const authGetMe = async (): Promise<{
  id: string;
  fullName: string;
  role: string;
  permissions: string;
}> => {
  const res = await api.get("/auth/me");
  return res.data;
};

export const authRefreshToken = async () => {
  const res = await api.post("/auth/refresh");
  return res.data;
};
