import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function DropdownMenu({ children }: Props) {
  return (
    <div className="hover:overflow-hidden rounded-lg bg-gray-100 border-2 dark:bg-slate-400 dark:text-slate-800 drop-shadow-md">
      {children}
    </div>
  );
}
