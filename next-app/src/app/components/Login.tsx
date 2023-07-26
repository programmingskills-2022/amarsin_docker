"use client";
import Image from "next/image";
import LoginHeader from "./login/LoginHeader";
import LoginForm from "./login/LoginForm";
import { useGeneralContext } from "@/app/contexts/GeneralContext";

export default function Login() {
  return (
    <div className="w-full mx-auto">
      <section className="relative w-full flex justify-center items-center bg-gray-100 dark:bg-slate-800 dark:text-white overflow-hidden">
        {/* right side */}
        <div className="md:w-1/3 px-8 py-4 w-full h-screen flex flex-col justify-start items-center">
          <LoginHeader />
          <LoginForm />
        </div>
        {/* left side */}
        <div className="hidden md:block md:w-2/3 min-h-screen overflow-hidden z-0 drop-shadow-xl">
          <div className="w-full absolute top-0 left-0">
            <Image
              src="/images/loginPic1.png"
              className="w-full h-screen object-cover -skew-x-6 -translate-x-12"
              alt="Login background picture"
              width={650}
              height={650}
            />
          </div>
          <div className="absolute top-5 left-5">
            <Image
              className="rounded-xl"
              src="/images/logo.svg"
              alt="Logo"
              width={100}
              height={100}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
