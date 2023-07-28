import React, { useEffect, useState } from "react";
import TreeNode from "./TreeNode";
import IconlyClose from "@/app/svg/IconlyClose";
import { useAppSelector } from "@/app/redux/hooks";
import { createMenu, selectMenuAll } from "@/app/redux/menu";

export default function Nav() {
  const menuCurrentUser = useAppSelector(selectMenuAll);
  const [search, setSearch] = useState("");
  const [close, setClose] = useState(false);
  const [menu, setMenu] = useState<MenuItem[]>([]);

  useEffect(() => {
    setMenu(createMenu(menuCurrentUser.menu));
  }, [menuCurrentUser]);

  const searchMenuHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const closeHandler = () => {
    setClose(!close);
  };

  return (
    <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
      {/* <input
        className="m-2 text-slate-800 bg-gray-200 outline-none rounded-lg p-2"
        onChange={searchMenuHandle}
        placeholder="جستجوی منو ..."
      />
      <button
        className="w-full flex justify-center items-center pb-2"
        onClick={closeHandler}
      >
        <IconlyClose className="w-8 h-8" />
      </button> */}
      {menu?.map((node) => (
        <TreeNode
          key={node.menuResult.Id}
          node={node}
          level={0}
          search={search}
        />
      ))}
    </form>
  );
}
