import { AuthContext } from "@/context/AuthContext";
import { usersGetMe } from "@/services/users";
import type { User } from "@/types/auth";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

interface Props {
  children: ReactNode;
}

export default function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // const fetchUser = async () => {
  //   try {
  //     setLoading(true);
  //     const userData = await usersGetMe();
  //     setUser(userData);
  //   } catch (error) {
  //     console.error("Failed to fetch user:", error);
  //     setUser(null);
  //     document.cookie =
  //       "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const GetMe = () => {};
  const GetAccessWithRefresh = () => {};

  const initializeAuth = () => {
    const accessToken = document.cookie.includes("accessToken");
    const refreshToken = document.cookie.includes("refreshToken");

    if (accessToken && refreshToken) {
      try {
        GetMe();
      } catch (error) {
        try {
          GetAccessWithRefresh()
        } catch (error) {
          Logout()
        }
      }
    }

    if (accessToken && !refreshToken) {
      try {
        GetMe();
      } catch (error) {
        Logout()
      }
    }

    if (!accessToken && refreshToken) {
      try {
        GetAccessWithRefresh()
      } catch (error) {
        Logout()
      }
    }

    if (!accessToken && !refreshToken) {
      Logout()
    }
  };

  useEffect(() => {
    initializeAuth();
  }, []);

  return <AuthContext value={{ user, loading }}>{children}</AuthContext>;
}
