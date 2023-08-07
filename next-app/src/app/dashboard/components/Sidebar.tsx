"use client";

import { useContext } from "react";
import Logo from "./header/Logo";
import Nav from "./sidebar/Nav";
import { GeneralContext } from "@/app/contexts/GeneralContext";

export default function Sidebar() {
  const { showMenu } = useContext(GeneralContext);

  return (
    <aside
      className={`${
        showMenu ? "block" : "hidden"
      } origin-right animate-open-menu md:w-72 bg-indigo-900 border-l-2 text-white/80 min-h-[calc(100vh-6rem)]`}
    >
      <Nav />
    </aside>
  );
}
