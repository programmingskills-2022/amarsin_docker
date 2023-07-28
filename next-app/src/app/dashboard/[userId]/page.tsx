"use client";

import { GeneralContext } from "@/app/contexts/GeneralContext";
import { useAppSelector } from "@/app/redux/hooks";
import { selectLoginData } from "@/app/redux/login";
import Button from "@/app/ui/Button";
import Card from "@/app/ui/Card";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useContext } from "react";

type Params = {
  params: {
    userId: number;
  };
};

export default function page({ params: { userId } }: Params) {
  const login = useAppSelector(selectLoginData);
  const userInfo = login.Data?.result;

  if (!userInfo) return notFound();

  return (
    <form className="p-4 w-full md:main-width">
      <Card>
        <label>نام: {userInfo.FName}</label>
        <label>نام خانوادگی: {userInfo.LName}</label>
        <label>اطلاعات بیشتر:</label>
        <textarea className="w-full h-48 bg-transparent" readOnly>
          {userInfo.Perms}
        </textarea>
        <div className="w-full flex justify-end">
          <Link href="/dashboard">
            <Button onClick={() => {}}> بازگشت </Button>
          </Link>
        </div>
      </Card>
    </form>
  );
}
