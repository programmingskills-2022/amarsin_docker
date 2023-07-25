import Image from "next/image";
import React from "react";
import LogoAmarsin from "./LogoAmarsin";
import ThemeToggler from "@/app/general/ThemeToggler";

export default function LoginHeader() {
  return (
    <div className="w-full flex flex-row justify-between md:justify-end items-center">
      <div className="w-2/3 flex gap-2">
        <Image
          className="md:hidden rounded-xl"
          src="/images/logo.svg"
          alt="Logo"
          width={100}
          height={100}
        />
      </div>
      <LogoAmarsin />
    </div>
  );
}
