import Node from "./Node";
import { useEffect, useState } from "react";
import IconlyArrowDown from "@/app/svg/IconlyArrowDown";
import IconlyArrowUp from "@/app/svg/IconlyArrowUp";
import IconlyWork from "@/app/svg/IconlyWork";
import IconlyTickSquare from "@/app/svg/IconlyTickSquare";
import IconlyDocument from "@/app/svg/IconlyDocument";

type Props = {
  node: MenuItem;
  level: number;
  search: string;
};

export default function TreeNode({ node, level = 0, search = "" }: Props) {
  const [isOpen, setIsOpen] = useState(false); // Track if the node is open or closed
  const [isDownArrow, setIsDownArrow] = useState(true);

  // Check if the current node has children
  const hasChildren = node.children && node.children.length > 0;

  // Toggle the open/closed state of the node
  const toggleOpen = () => {
    setIsOpen(!isOpen);
    setIsDownArrow(!isDownArrow);
  };

  // Check if the node matches the search string
  const isMatch: boolean = node.menuResult.Name.toLowerCase().includes(
    search.toLowerCase()
  );

  return (
    <ul>
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
          hasChildren &&
          (isDownArrow ? (
            <IconlyArrowDown className="h-4 w-4" />
          ) : (
            <IconlyArrowUp className="h-4 w-4" />
          ))
        }
        iconName={`${node.menuResult.Name}`}
        className={` pl-2 ${
          level === 0
            ? "bg-indigo-900 pr-2"
            : level === 1
            ? "bg-indigo-800 pr-4"
            : level === 2
            ? "bg-indigo-700 pr-6"
            : level === 3
            ? "bg-indigo-600 pr-8"
            : "bg-indigo-500 pr-10"
        } `}
        onClick={toggleOpen}
      />
      {isOpen &&
        hasChildren &&
        node.children?.map((child) => {
          return (
            <li key={child.menuResult.Id}>
              <TreeNode node={child} level={level + 1} search={search} />
            </li>
          );
        })}
    </ul>
  );
}
