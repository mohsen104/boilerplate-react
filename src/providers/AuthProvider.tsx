import { AuthContext } from "@/context/AuthContext";
import {
  authGetMe,
  authRefreshToken,
} from "@/features/auth/services/auth.service";
import type { User } from "@/types/auth";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

interface Props {
  children: ReactNode;
}

export default function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const GetMe = async () => {
    const res = await authGetMe();
    return {
      id: res.id,
      name: res.fullName,
      role: res.role,
      permissions: res.permissions,
    };
  };

  const GetAccessWithRefresh = async () => {
    const res = await authRefreshToken();
    return res;
  };

  const initializeAuth = async () => {
    setLoading(true);

    const hasAccessToken = document.cookie.includes("accessToken");
    const hasRefreshToken = document.cookie.includes("refreshToken");

    try {
      if (hasAccessToken) {
        const me = await GetMe();
        setUser(me);
      } else if (hasRefreshToken) {
        const me = await GetAccessWithRefresh();
        setUser(me);
      } else {
        setUser(null);
      }
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    initializeAuth();
  }, []);

  return <AuthContext value={{ user, loading }}>{children}</AuthContext>;
}
