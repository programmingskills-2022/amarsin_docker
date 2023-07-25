export async function getLoginByParams(userName: string, password: string) {
  const LOGIN_URL = `http://ps.dotis.ir/api/UserApi/login?_userName=${userName}&_pass=${password}&player_id=0&_customerTyp=9`;

  try {
    const res = await fetch(LOGIN_URL);
    if (!res.ok) return undefined;

    return await res.json();
  } catch (err) {
    return err;
  }
}
