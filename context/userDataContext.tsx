import { createContext, ReactNode, useContext, useState } from "react";

interface GlobalContextType {
  userData: any;
  setUserData: (data: any) => void;
  token: string;
  setToken: (token: string) => void;
}

const GlobalContext = createContext<GlobalContextType | null>(null);

export const userDataContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("userDataContext must be used within GlobalContextProvider");
  }
  return context;
};

const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<any>(null);
  const [token, setToken] = useState<string>("");

  return (
    <GlobalContext.Provider value={{ userData, setUserData, token, setToken }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;