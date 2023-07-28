import { GeneralContext } from "@/app/contexts/GeneralContext";
import { useContext } from "react";

export async function getLoginByParams(
  userName: string,
  password: string,
  apiPoint: string
) {
  const LOGIN_URL = `${apiPoint}/UserApi/login?_userName=${userName}&_pass=${password}&player_id=0&_customerTyp=9`;

  try {
    const res = await fetch(LOGIN_URL);
    if (!res.ok) return undefined;

    return await res.json();
  } catch (err) {
    return err;
  }
}
