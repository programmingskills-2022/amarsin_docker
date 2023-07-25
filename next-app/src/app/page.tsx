"use client";
import Link from "next/link";
import Login from "./components/Login";
import { useContext } from "react";
import { LoginContext } from "./contexts/LoginContext";

export default function Home() {
  // const { setLoginInfos } = useContext(LoginContext);
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
