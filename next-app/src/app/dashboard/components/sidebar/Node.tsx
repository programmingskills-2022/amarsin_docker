import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  arrowIcon: ReactNode;
  icon: ReactNode;
  iconName: string;
  className: string;
  onClick: () => void;
};

export default function Node({
  arrowIcon,
  icon,
  iconName,
  className,
  onClick,
}: Props) {
  return (
    <button
      className={`w-full flex justify-between items-center border border-b-0 border-slate-800/30 text-sm gap-2 dark:text-white dark:hover:text-black hover:text-black hover:bg-slate-300 hover:font-bold ${className}`}
      onClick={onClick}
    >
      <div className="flex gap-2 justify-center items-center">
        {icon}
        <p className="text-start py-2">{iconName}</p>
      </div>
      {arrowIcon}
    </button>
  );
}
