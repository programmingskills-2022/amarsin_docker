"use client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { generalFetch } from "../lib/generalFetch";

type ContextType = {
  login: Login;
  showProfileMenu: boolean;
  showMenu: boolean;
  apiPoint: string;
  mobileNavsidebar: boolean;
  expandAllMenu: boolean;
  menuName: string;
  windowWidth: number;
  system: number;
  financialYear: number;
  systems: FinancialYear_SystemData[];
  financialYears: FinancialYear_SystemData[];
  setShowProfileMenu: Dispatch<SetStateAction<boolean>>;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
  toggleProfileMenu: () => void;
  setMobileNavsidebar: Dispatch<SetStateAction<boolean>>;
  setExpandAllMenu: Dispatch<SetStateAction<boolean>>;
  setMenuName: Dispatch<SetStateAction<string>>;
  setWindowWidth: Dispatch<SetStateAction<number>>;
  setSystem: Dispatch<SetStateAction<number>>;
  setFinancialYear: Dispatch<SetStateAction<number>>;
  fetchFinancialYearsAndSystems: () => Promise<void>;
};

export const GeneralContext = createContext<ContextType>({} as ContextType);

interface ProviderProps {
  children: ReactNode;
}

export const DataProvider = ({ children }: ProviderProps) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [expandAllMenu, setExpandAllMenu] = useState(false);
  const [menuName, setMenuName] = useState("آمارسین");
  const [mobileNavsidebar, setMobileNavsidebar] = useState(false);
  const [login, setLogin] = useState({} as Login);
  const [windowWidth, setWindowWidth] = useState(0);
  const [financialYears, setFinancialYears] = useState<
    Array<FinancialYear_SystemData>
  >([]);
  const [systems, setSystems] = useState<Array<FinancialYear_SystemData>>([]);
  const [financialYear, setFinancialYear] = useState<number>(13);
  const [system, setSystem] = useState<number>(4);
  const apiPoint = "http://ps.dotis.ir/api";
  const FINANCIALYEAR_URL = `${apiPoint}/defapi/FiscalSearch?search=&page=1&LastId=0&UsrId=0`;
  const SYSTEM_URL = `${apiPoint}/defapi/SystemSearch?search=&page=1&LastId=0&UsrId=0`;

  const fetchFinancialYearsAndSystems = async () => {
    const res1: Promise<FinancialYear_System> = generalFetch(FINANCIALYEAR_URL);
    setFinancialYears((await res1)?.Data?.result.SearchResults);
    const res2: Promise<FinancialYear_System> = generalFetch(SYSTEM_URL);
    setSystems((await res2)?.Data?.result.SearchResults);
  };

  const toggleProfileMenu = () => {
    setShowProfileMenu((prev) => !showProfileMenu);
  };

  const contextValue: ContextType = {
    login,
    showProfileMenu,
    showMenu,
    mobileNavsidebar,
    apiPoint,
    expandAllMenu,
    menuName,
    windowWidth,
    system,
    financialYear,
    systems,
    financialYears,
    toggleProfileMenu,
    setShowProfileMenu,
    setShowMenu,
    setMobileNavsidebar,
    setExpandAllMenu,
    setMenuName,
    setWindowWidth,
    setSystem,
    setFinancialYear,
    fetchFinancialYearsAndSystems,
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
