"use client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { getLoginByParams } from "../lib/logins";

type ContextType = {
  userName: string;
  password: string;
  login: Login;
  showProfileMenu: boolean;
  showMenu: boolean;
  apiPoint: string;
  mobileNavsidebar: boolean;
  setShowProfileMenu: Dispatch<SetStateAction<boolean>>;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
  setLoginInfos: (userName: string, password: string) => {};
  toggleProfileMenu: () => void;
  setMobileNavsidebar: Dispatch<SetStateAction<boolean>>;
};

export const GeneralContext = createContext<ContextType>({} as ContextType);

interface ProviderProps {
  children: ReactNode;
}

export const DataProvider = ({ children }: ProviderProps) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [mobileNavsidebar, setMobileNavsidebar] = useState(false);
  const [login, setLogin] = useState({} as Login);
  const apiPoint = "http://ps.dotis.ir/api";

  const setLoginInfos = async (userName: string, password: string) => {
    const res: Promise<Login> = getLoginByParams(userName, password, apiPoint);

    const loginData = await res;

    setLogin(loginData);
    window.localStorage.setItem("login", JSON.stringify(loginData));
    setUserName(userName);
    setPassword(password);
  };

  const toggleProfileMenu = () => {
    setShowProfileMenu((prev) => !showProfileMenu);
  };

  const contextValue: ContextType = {
    userName,
    password,
    login,
    showProfileMenu,
    showMenu,
    mobileNavsidebar,
    apiPoint,
    setLoginInfos,
    toggleProfileMenu,
    setShowProfileMenu,
    setShowMenu,
    setMobileNavsidebar,
  };

  return (
    <GeneralContext.Provider value={contextValue}>
      {children}
    </GeneralContext.Provider>
  );
};

export function useGeneralContext() {
  const context = useContext(GeneralContext);

  if (!context) throw new Error("خطا !");

  return context;
}
