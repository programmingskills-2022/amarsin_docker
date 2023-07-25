import { createMenu, selectMenuAll } from "@/features/Menu";
import { useAppSelector } from "@/features/hooks";
import React, { useEffect, useState } from "react";
import TreeNode from "./TreeNode";

export default function Nav() {
  const menuCurrentUser = useAppSelector(selectMenuAll);
  const [menu, setMenu] = useState<MenuItem[]>([]);

  useEffect(() => {
    setMenu(createMenu(menuCurrentUser));
  }, []);

  return (
    <nav className="">
      {menu?.map((node) => (
        <TreeNode key={node.menuResult.Id} node={node} level={0} />
      ))}
    </nav>
  );
}
