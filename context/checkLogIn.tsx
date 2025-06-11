import { baseUrl } from "@/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import "core-js/stable/atob";
import { jwtDecode } from "jwt-decode";
import { userDataContext } from "./userDataContext";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface LogInContextType {
  route: string;
  isLoading: boolean;
}

const LogInContext = createContext<LogInContextType | null>(null);

export const useCheckLogIn = () => {
  const context = useContext(LogInContext);
  if (!context) {
    throw new Error("useCheckLogIn must be used within a LogInContextProvider");
  }
  return context;
};

const LogInContextProvider = ({ children }: { children: ReactNode }) => {
  const [route, setRoute] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { setUserData, setToken } = userDataContext();

  useEffect(() => {
    const checkLogin = async () => {
      setIsLoading(true);
      try {
        const token = await AsyncStorage.getItem("token");

        if (token) {
          setToken(token);

          const decodedToken: any = jwtDecode(token);
          const userId = decodedToken?.userId;

          if (userId) {
            const res = await axios.get(`${baseUrl}/api/user/${userId}`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });

            const user = res?.data?.user;

            if (user?.userName) {
              setUserData(user);

              setRoute(
                user.role === "Admin"
                  ? "/(root)/(admin)/adminDashboard"
                  : "/(root)/(user)/home"
              );
            } else {
              setRoute("/(auth)/welcome");
            }
          } else {
            setRoute("/(auth)/welcome");
          }
        } else {
          setRoute("/(auth)/welcome");
        }
      } catch (error) {
        console.error("Login check error:", error);
        setRoute("/(auth)/welcome");
      } finally {
        setIsLoading(false);
      }
    };

    checkLogin();
  }, []);

  return (
    <LogInContext.Provider
      value={{
        route,
        isLoading,
      }}
    >
      {children}
    </LogInContext.Provider>
  );
};

export default LogInContextProvider;
