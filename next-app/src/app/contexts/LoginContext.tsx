"use client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { getLoginByParams } from "../../lib/logins";

type ContextType = {
  userName: string;
  password: string;
  login: Login;
  showProfileMenu: boolean;
  showMenu: boolean;
  setShowProfileMenu: Dispatch<SetStateAction<boolean>>;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
  setLoginInfos: (userName: string, password: string) => {};
  toggleProfileMenu: () => void;
  mobileNavsidebar: boolean;
  setMobileNavsidebar: Dispatch<SetStateAction<boolean>>;
};

export const LoginContext = createContext<ContextType>({} as ContextType);

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

  const setLoginInfos = async (userName: string, password: string) => {
    const res: Promise<Login> = getLoginByParams(userName, password);

    const loginData = await res;

    setLogin(loginData);
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
    setLoginInfos,
    toggleProfileMenu,
    showProfileMenu,
    showMenu,
    setShowProfileMenu,
    setShowMenu,
    mobileNavsidebar,
    setMobileNavsidebar,
  };

  return (
    <LoginContext.Provider value={contextValue}>
      {children}
    </LoginContext.Provider>
  );
};

export function useGeneralContext() {
  const context = useContext(LoginContext);

  if (!context) throw new Error("خطا !");

  return context;
}
