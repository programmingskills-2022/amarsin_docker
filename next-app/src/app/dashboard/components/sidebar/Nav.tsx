import React, { useContext, useEffect, useState } from "react";
import TreeNode from "./TreeNode";
import IconlyClose from "@/app/svg/IconlyClose";
import { useAppSelector } from "@/app/redux/hooks";
import { createMenu, selectMenuAll } from "@/app/redux/menu";
import IconlyShrink from "@/app/svg/IconlyShrink";
import IconlyExpand from "@/app/svg/IconlyExpand";
import { GeneralContext } from "@/app/contexts/GeneralContext";

export default function Nav() {
  const menuCurrentUser = useAppSelector(selectMenuAll);
  const [search, setSearch] = useState("");
  const [initialOpen, setInitialOpen] = useState(false);
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const { expandAllMenu, setExpandAllMenu } = useContext(GeneralContext);

  useEffect(() => {
    const menu = createMenu(menuCurrentUser.menu);
    setMenu(menu);
    setExpandAllMenu(false);
  }, [menuCurrentUser]);

  const searchMenuHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    //expand menu in typing search field
    if (e.target.value === "") {
      setExpandAllMenu(false);
    } else {
      setExpandAllMenu(true);
    }

    setSearch(e.target.value);
  };

  const expandAllMenuHandler = () => {
    setExpandAllMenu(!expandAllMenu);
    setInitialOpen(!initialOpen);
  };

  return (
    <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
      {/* <input
        className="m-2 text-slate-800 bg-gray-200 outline-none rounded-lg p-2"
        onChange={searchMenuHandle}
        placeholder="جستجوی منو ..."
      />
      <button
        data-tooltip-target="tooltip-light"
        data-tooltip-style="light"
        className="w-full flex justify-center items-center py-2 opacity-50 hover:opacity-90"
        onClick={expandAllMenuHandler}
      >
        {expandAllMenu ? (
          <IconlyShrink className="w-10 h-10 hover:border-2 hover:border-white p-1 rounded-lg" />
        ) : (
          <IconlyExpand className="w-10 h-10 hover:border-2 hover:border-white p-1 rounded-lg" />
        )}
      </button> */}

      {menu?.map((node) => (
        <TreeNode
          key={node.menuResult.Id}
          node={node}
          level={0}
          search={search}
          initialOpen={initialOpen}
        />
      ))}
    </form>
  );
}
