import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
};
export default function Button({ children }: Props) {
  return (
    <button
      className={`py-2 px-4 dark:bg-white dark:text-black bg-indigo-500 text-white rounded-xl`}
    >
      {children}
    </button>
  );
}
