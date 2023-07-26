"use client";
import Link from "next/link";
import Login from "./components/Login";
import { useContext } from "react";
import { GeneralContext } from "./contexts/GeneralContext";

export default function Home() {
  // const { setLoginInfos } = useContext(GeneralContext);
  // setLoginInfos("mostol", "123");
  return (
    <main className="w-screen flex items-stretch min-h-screen bg-gray-100">
      <Login />
      {/* <Link href="/dashboard" className="grid place-content-center text-2xl">
        dashboard
      </Link> */}
    </main>
  );
}
