import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  iconName: string;
  className: string;
  href: string;
  onClick: () => void;
};

export default function DropdownMenuItem({
  icon,
  iconName,
  className,
  href,
  onClick,
}: Props) {
  return (
    <Link href={href}>
      <button
        className={`w-full dark:text-white dark:hover:text-black hover:text-black text-sm flex justify-items-start gap-2 ${className} hover:bg-indigo-100 hover:font-bold`}
        onClick={onClick}
      >
        {icon}
        <p className="text-start">{iconName}</p>
      </button>
    </Link>
  );
}
