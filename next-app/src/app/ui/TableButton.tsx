import React, { ReactNode } from "react";
import { classNames } from "../general/Utils";

// export function Button({
//   children,
//   className,
//   ...rest
// }: {
//   children: ReactNode;
//   className: any;
// }) {
//   return (
//     <button
//       type="button"
//       className={classNames(
//         "relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50",
//         className
//       )}
//       {...rest}
//     >
//       {children}
//     </button>
//   );
// }

export interface ButtonProps {
  children: React.ReactNode;
  className: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  disabled: boolean;
}

export function Button({
  children,
  className,
  onClick,
  disabled,
}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        "relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50",
        className ?? ""
      )}
      //{...rest}
    >
      {children}
    </button>
  );
}

export function PageButton({
  children,
  className,
  onClick,
  disabled,
}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        "relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50",
        className ?? ""
      )}
      //{...rest}
    >
      {children}
    </button>
  );
}
