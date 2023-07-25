import { ReactNode } from "react";

type Props = {
  className: string;
  children: ReactNode;
};

export default function IconlyBase({ className, children }: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
}
