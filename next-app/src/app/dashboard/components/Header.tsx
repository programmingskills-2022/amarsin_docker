"use client";

import { GeneralContext } from "@/app/contexts/GeneralContext";
import ThemeToggler from "@/app/general/ThemeToggler";
import IconlyArrowDown from "@/app/svg/IconlyArrowDown";
import IconlyUser from "@/app/svg/IconlyUser";
import { useContext, useEffect, useRef } from "react";
import Logo from "./header/Logo";
import ProfileMenu from "./header/ProfileMenu";
import IconlyArrowUp from "@/app/svg/IconlyArrowUp";
import { selectLoginData } from "@/app/redux/login";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import Input2 from "@/app/ui/Input2";
import SystemsAndFinancialYears from "./header/SystemsAndFinancialYears";

export default function Header() {
  let { showProfileMenu, setShowProfileMenu, toggleProfileMenu } =
    useContext(GeneralContext);

  let login = useAppSelector(selectLoginData);

  if (login?.Data === undefined) return undefined;

  const { FName, LName } = login.Data?.result;
  const dropdown = useRef<HTMLDivElement>(null);
  const refButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // only add the event listener when the dropdown is opened

    if (!showProfileMenu) return;

    function handleClick(event: MouseEvent) {
      if (
        dropdown.current &&
        showProfileMenu &&
        !refButton.current?.contains(event.target as Node) &&
        !dropdown.current.contains(event.target as Node)
      ) {
        setShowProfileMenu(false);
      }
    }
    window.addEventListener("click", handleClick);
    // clean up
    return () => window.removeEventListener("click", handleClick);
  }, [setShowProfileMenu, showProfileMenu]);

  return (
    <header className="sticky top-0 z-10 border-b-2 dark:bg-slate-600 bg-slate-100 flex justify-between items-center dark:text-white text-slate-800 text-2xl ">
      {/* right  */}
      <Logo />
      <SystemsAndFinancialYears />

      {/* left */}
      <div className="relative flex gap-1">
        <button
          className={`flex items-center justify-center focus:outline-none   ${
            showProfileMenu && "bg-indigo-500 text-white"
          } hover:text-white hover:bg-indigo-500 p-2 rounded-lg`}
          onClick={toggleProfileMenu}
          ref={refButton}
        >
          <IconlyUser className="w-6 h-6" />
          <p className="text-sm hidden md:block">{`${FName} ${LName}`}</p>
          {showProfileMenu ? (
            <IconlyArrowUp className="w-6 h-6" />
          ) : (
            <IconlyArrowDown className="w-6 h-6" />
          )}
        </button>
        {showProfileMenu && (
          <div className="absolute top-12 right-0" ref={dropdown}>
            <ProfileMenu />
          </div>
        )}
        <ThemeToggler />
      </div>
    </header>
  );
}
