import { useContext } from "react";
import { RootState } from "./index";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GeneralContext } from "@/app/contexts/GeneralContext";

export interface MenuState {
  loading: boolean;
  menu: MenuResult[];
  error: string | undefined;
}
const initialState: MenuState = {
  loading: false,
  menu: [],
  error: undefined,
};
export const fetchMenu = createAsyncThunk("menu/fetchMenu", async () => {
  let { apiPoint, login } = useContext(GeneralContext);

  if (JSON.parse(window.localStorage.getItem("login") as string))
    login = JSON.parse(window.localStorage.getItem("login") as string);

  const MENU_URL = `${apiPoint}/userapi/UserPermList?UsrId=${login.Data.result.userId}`;

  const res = fetch(MENU_URL)
    .then((data) => data.json())
    .then((result) => result.Data.result);

  const result = await res;
  return res;
});

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    saveMenu(state, action) {
      state.menu = action.payload;
    },
  },
});
export const selectMenuAll = (state: RootState) => state.persistedReducer.menu;

export const selectMenuParent = (state: RootState) =>
  state.persistedReducer.menu.menu.filter(
    (menuItem) => menuItem.ParentId === 0
  );

export const getMenuParents = (state: RootState, menuId: number) => {
  const menuParents: MenuResult[] = [];
  let temp: MenuResult;
  let id = menuId;
  while (id !== 0) {
    temp = state.persistedReducer.menu.menu.find(
      (menuItem) => menuItem.Id === id
    ) as MenuResult;
    id = temp?.ParentId;
    menuParents.push(temp);
  }

  return menuParents.reverse();
};

export function uniqueArray(arr: any) {
  return arr.filter((thing: any, index: number) => {
    const _thing = JSON.stringify(thing);
    return (
      index ===
      arr.findIndex((obj: any) => {
        return JSON.stringify(obj) === _thing;
      })
    );
  });
}

export const getMenuTreeLevel = (
  state: RootState,
  permitions: number[],
  level: number
) => {
  const permitionsTree = uniqueArray(
    permitions.map((perm) => getMenuParents(state, perm))
  );

  const permitionsLevel = permitionsTree
    .map((perms: any) => perms[level])
    .filter((perms: any) => perms !== undefined);

  return uniqueArray(permitionsLevel);
};

export function createMenu(menuItems: MenuResult[], parentId = 0): MenuItem[] {
  const result: MenuItem[] = [];

  for (let item of menuItems) {
    const item1: MenuItem = {
      menuResult: item,
      children: undefined,
    };
    if (item1.menuResult.ParentId === parentId) {
      const children = createMenu(menuItems, item1.menuResult.Id);
      if (children.length > 0) {
        item1.children = children;
      }
      result.push(item1);
    }
  }
  return result;
}

export const { saveMenu } = menuSlice.actions;
export default menuSlice.reducer;
