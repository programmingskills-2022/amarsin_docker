"use client";
import { useContext, useEffect } from "react";
import Login from "./components/Login";
import { GeneralContext } from "./contexts/GeneralContext";

export default function Home() {
  const { fetchFinancialYearsAndSystems } = useContext(GeneralContext);

  return (
    <main className="w-screen flex items-stretch min-h-screen bg-gray-100">
      <Login />
      {/* <Link href="/dashboard" className="grid place-content-center text-2xl">
        dashboard
      </Link> */}
    </main>
  );
}
