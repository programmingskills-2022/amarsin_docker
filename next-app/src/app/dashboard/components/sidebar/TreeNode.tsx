import Node from "./Node";
import { useContext, useEffect, useState } from "react";
import IconlyArrowDown from "@/app/svg/IconlyArrowDown";
import IconlyArrowUp from "@/app/svg/IconlyArrowUp";
import IconlyWork from "@/app/svg/IconlyWork";
import IconlyTickSquare from "@/app/svg/IconlyTickSquare";
import IconlyDocument from "@/app/svg/IconlyDocument";
import { GeneralContext } from "@/app/contexts/GeneralContext";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  node: MenuItem;
  level: number;
  search: string;
  initialOpen: boolean;
};

export default function TreeNode({
  node,
  level = 0,
  search = "",
  initialOpen,
}: Props) {
  const [isOpen, setIsOpen] = useState(false); // Track if the node is open or closed
  const { setShowMenu, expandAllMenu, setExpandAllMenu } =
    useContext(GeneralContext);
  const [isDownArrow, setIsDownArrow] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  // Check if the current node has children
  const hasChildren = node.children && node.children.length > 0;

  // Toggle the open/closed state of the node
  const toggleOpen = () => {
    if (hasChildren) {
      setIsOpen(!isOpen);
      setIsDownArrow(!isDownArrow);
    }
  };

  const navToMenuPath = (path: string) => {
    console.log(pathname);
    //pathname = path;
    // console.log(path);
    // router.push(path);
    setShowMenu((prev) => false);
  };

  // Check if the node matches the search string
  const isMatch: boolean = node.menuResult.Name.toLowerCase().includes(
    search.toLowerCase()
  );

  return (
    <ul>
      <Link href={node.menuResult.Path}>
        <Node
          icon={
            (node.menuResult.Id === 100000000 && (
              <IconlyWork className="h-4 w-4" />
            )) ||
            (node.menuResult.Id === 200000000 && (
              <IconlyTickSquare className="h-4 w-4" />
            )) ||
            (node.menuResult.Id === 300000000 && (
              <IconlyDocument className="h-4 w-4" />
            )) ||
            (node.menuResult.Id === 400000000 && (
              <IconlyDocument className="h-4 w-4" />
            )) ||
            (node.menuResult.Id === 500000000 && (
              <IconlyDocument className="h-4 w-4" />
            )) ||
            (node.menuResult.Id === 600000000 && (
              <IconlyDocument className="h-4 w-4" />
            )) ||
            (node.menuResult.Id === 700000000 && (
              <IconlyDocument className="h-4 w-4" />
            )) ||
            (node.menuResult.Id === 800000000 && (
              <IconlyDocument className="h-4 w-4" />
            )) ||
            (node.menuResult.Id === 900000000 && (
              <IconlyDocument className="h-4 w-4" />
            ))
          }
          arrowIcon={
            !expandAllMenu &&
            hasChildren &&
            (isDownArrow ? (
              <IconlyArrowDown className="h-4 w-4" />
            ) : (
              <IconlyArrowUp className="h-4 w-4" />
            ))
          }
          iconName={`${node.menuResult.Name}`}
          className={`pl-2 ${
            level === 0
              ? "bg-indigo-900 pr-2"
              : level === 1
              ? "bg-indigo-800 pr-4"
              : level === 2
              ? "bg-indigo-700 pr-6"
              : level === 3
              ? "bg-indigo-600 pr-8"
              : "bg-indigo-500 pr-10"
          } ${!isMatch && "hidden"}`}
          //navigate to path in menu leaf
          onClick={toggleOpen}
        />
      </Link>
      {(expandAllMenu || (isOpen && hasChildren)) &&
        node.children?.map((child) => {
          return (
            <li key={child.menuResult.Id}>
              <TreeNode
                node={child}
                level={level + 1}
                search={search}
                initialOpen={isOpen}
              />
            </li>
          );
        })}
    </ul>
  );
}
