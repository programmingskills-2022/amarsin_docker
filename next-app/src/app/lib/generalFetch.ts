export async function generalFetch(URL: string) {
  try {
    const res = await fetch(URL);
    if (!res.ok) return undefined;

    return await res.json();
  } catch (err) {
    return err;
  }
}
