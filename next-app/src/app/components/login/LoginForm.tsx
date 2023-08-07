/* 
this component is contains of all things necessary for login form:
icons are from https://unpkg.com/browse/@heroicons/react@2.0.18/24/outline/
*/

"use client";
import Input from "@/app/ui/Input";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useContext, useState } from "react";
import { GeneralContext } from "../../contexts/GeneralContext";
import IconlyUser from "../../svg/IconlyUser";
import IconlyLock from "../../svg/IconlyLock";
import { useAppDispatch } from "@/app/redux/hooks";
import { saveLoginData } from "@/app/redux/login";
import { saveMenu } from "@/app/redux/menu";
import { generalFetch } from "@/app/lib/generalFetch";

export default function LoginForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { apiPoint } = useContext(GeneralContext);

  const submitLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!userName.length || !password.length) {
      setError("نام کاربر یا رمز عبور وارد نشده است.");
      return;
    }

    const URL_LOGIN = `${apiPoint}/UserApi/login?_userName=${userName}&_pass=${password}&player_id=0&_customerTyp=9`;
    const res = generalFetch(URL_LOGIN);

    const login = await res;

    const loginMeta = login.Meta;

    if (loginMeta === undefined) {
      setError("سرور پاسخ نمی دهد.");
      return;
    }

    if (loginMeta.errorCode !== -1) {
      setError((prev) => loginMeta.message);
      return;
    }

    //username and password match->
    //set login info in login redux
    setError((prev) => "");

    dispatch(saveLoginData({ loginData: login, userName, password }));

    //set user menu in menu redux
    const URL_MENU = `${apiPoint}/userapi/UserPermList?UsrId=${login.Data.result.userId}`;
    const menuRes = generalFetch(URL_MENU);

    const menu: MenuResult[] = (await menuRes).Data.result;
    dispatch(saveMenu(menu));

    router.push("/dashboard");
  };

  return (
    <form
      autoComplete="off"
      onSubmit={submitLogin}
      className="w-full xl:w-3/4 h-screen flex flex-col justify-evenly items-center"
    >
      <div className="flex flex-col items-center gap-2">
        <Image src="/images/avatar.svg" width={80} height={80} alt="avatar" />
        <label className="text-center mx-auto">ورود به حساب کاربری</label>
      </div>
      <div className="w-full flex flex-col items-center md:gap-0 gap-4">
        <Input
          type="text"
          labelName="نام کاربری"
          inputName={userName}
          setInputName={setUserName}
          autofocus={true}
          disabled={false}
          icon={
            <IconlyUser className="dark:text-white/50 text-slate-600 w-4 h-4" />
          }
        />
        <Input
          type="password"
          labelName="رمز عبور"
          inputName={password}
          setInputName={setPassword}
          autofocus={false}
          disabled={false}
          icon={
            <IconlyLock className="dark:text-white/50 text-slate-600 w-4 h-4" />
          }
        />
      </div>
      {error && (
        <p className="w-full text-right dark:text-red-400 text-red-600 text-sm">
          {error}
        </p>
      )}
      <button
        className="m-4 px-4 py-2 dark:bg-slate-200 dark:text-slate-800
      bg-indigo-600 text-white dark:hover:bg-slate-100 hover:bg-indigo-800
      rounded-xl drop-shadow-sm w-full"
      >
        ورود
      </button>
    </form>
  );
}
