import Node from "./Node";
import { useState } from "react";
import IconlyArrowDown from "@/app/svg/IconlyArrowDown";
import IconlyArrowUp from "@/app/svg/IconlyArrowUp";
import IconlyWork from "@/app/svg/IconlyWork";
import IconlyTickSquare from "@/app/svg/IconlyTickSquare";
import IconlyDocument from "@/app/svg/IconlyDocument";

type Props = {
  node: MenuItem;
  level: number;
};

export default function TreeNode({ node, level = 0 }: Props) {
  const [isOpen, setIsOpen] = useState(false); // Track if the node is open or closed
  const [isDownArrow, setIsDownArrow] = useState(true);

  // Check if the current node has children
  const hasChildren = node.children && node.children.length > 0;

  // Toggle the open/closed state of the node
  const toggleOpen = () => {
    setIsOpen(!isOpen);
    setIsDownArrow(!isDownArrow);
  };

  return (
    <ul>
      <Node
        icon={
          (node.menuResult.Id === 100000000 && (
            <IconlyWork className="h-3 w-3" />
          )) ||
          (node.menuResult.Id === 200000000 && (
            <IconlyTickSquare className="h-3 w-3" />
          )) ||
          (node.menuResult.Id === 300000000 && (
            <IconlyDocument className="h-3 w-3" />
          )) ||
          (node.menuResult.Id === 400000000 && (
            <IconlyDocument className="h-3 w-3" />
          )) ||
          (node.menuResult.Id === 500000000 && (
            <IconlyDocument className="h-3 w-3" />
          )) ||
          (node.menuResult.Id === 600000000 && (
            <IconlyDocument className="h-3 w-3" />
          )) ||
          (node.menuResult.Id === 700000000 && (
            <IconlyDocument className="h-3 w-3" />
          )) ||
          (node.menuResult.Id === 800000000 && (
            <IconlyDocument className="h-3 w-3" />
          )) ||
          (node.menuResult.Id === 900000000 && (
            <IconlyDocument className="h-3 w-3" />
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
        className={`${
          level === 0
            ? "bg-indigo-900 pr-2 pl-2"
            : level === 1
            ? "bg-indigo-800 pr-4 pl-2"
            : level === 2
            ? "bg-indigo-700 pr-6 pl-2"
            : level === 3
            ? "bg-indigo-600 pr-8 pl-2"
            : "bg-indigo-500 pr-10 pl-2"
        }`}
        onClick={toggleOpen}
      />
      {isOpen &&
        hasChildren &&
        node.children?.map((child) => {
          return (
            <li key={child.menuResult.Id}>
              <TreeNode node={child} level={level + 1} />
            </li>
          );
        })}
    </ul>
  );
}
