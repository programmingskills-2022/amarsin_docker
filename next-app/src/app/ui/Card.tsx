import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Card({ children }: Props) {
  return (
    <section className="max-w-2xl flex flex-col items-start gap-4 p-4 mx-auto border rounded-xl bg-gray-100 dark:bg-slate-800">
      {children}
    </section>
  );
}
