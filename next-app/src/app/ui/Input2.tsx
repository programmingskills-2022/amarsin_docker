import React, { ReactNode, useState } from "react";

type Props = {
  inputValue: any;
  setInputValue: React.Dispatch<React.SetStateAction<any>>;
  labelName: string;
  inputName: string;
  className: string;
  disabled: boolean;
  type: string;
  options: ReactNode | string;
};

export default function Input2({
  inputValue,
  setInputValue,
  labelName,
  inputName,
  className,
  disabled,
  type,
  options,
}: Props) {
  function changeInputVal(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setInputValue(e.target.value);
  }

  return (
    <div className={`flex flex-col md:flex-row gap-2 items-center `}>
      {type !== "checkbox" && <label htmlFor={inputName}>{labelName}</label>}
      {type !== "select" && (
        <input
          className={`${className} border-none bg-gray-100 dark:bg-gray-200 dark:text-slate-800 rounded-lg px-2 py-1 outline-none focus-visible:border-none`}
          type={type}
          id={inputName}
          value={inputValue}
          onChange={changeInputVal}
          defaultValue={inputValue}
          disabled={disabled}
        />
      )}
      {type === "select" && (
        <select
          className={`${className} border-none bg-gray-100 dark:bg-gray-200 dark:text-slate-800 rounded-lg px-2 py-1 outline-none focus-visible:border-none`}
          id={inputName}
          value={inputValue}
          onChange={changeInputVal}
          defaultValue={inputValue}
          disabled={disabled}
        >
          {options}
        </select>
      )}
    </div>
  );
}
