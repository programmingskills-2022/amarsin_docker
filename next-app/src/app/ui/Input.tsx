import {
  ChangeEvent,
  Dispatch,
  ReactElement,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import IconlyEyeOpen from "../svg/IconlyEyeOpen";
import IconlyEyeClose from "../svg/IconlyEyeClose";

type Props = {
  labelName: string;
  inputName: string;
  setInputName: Dispatch<SetStateAction<string>>;
  type: string;
  autofocus: boolean;
  icon: ReactElement;
};

export default function Input({
  labelName,
  inputName,
  setInputName,
  type,
  autofocus,
  icon,
}: Props) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const changeInputHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setInputName((prev) => e.target.value);
  };

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  useEffect(() => {
    const label: HTMLElement | null = document.getElementById(labelName);

    if (inputName.length > 0) {
      label?.classList.remove("top-1/2");
      label?.classList.add("-top-2");
      label?.classList.add("text-[10px]");
    } else {
      label?.classList.add("top-1/2");
      label?.classList.remove("-top-2");
      label?.classList.remove("text-[10px]");
    }
  }, [inputName]);

  return (
    <div
      className={`w-full flex mx-4 pt-8 pb-4 border-b-2 border-slate-500 group`}
    >
      <div className="flex justify-center items-center">{icon}</div>
      <div className="relative w-full">
        <label
          id={labelName}
          className={`absolute right-4 top-1/2 -translate-y-1/2 dark:autofill:text-white/50 autofill:text-slate-500 text-md duration-300 group-focus-within:-top-2 group-focus-within:text-[10px]
          `}
          htmlFor={labelName}
        >
          {labelName}
        </label>
        <input
          className={`absolute w-full h-full top-0 right-0 border-none p-4 text-xl bg-transparent  dark:text-white text-slate-800 outline-none peer`}
          id={labelName}
          type={type === "password" && isPasswordVisible ? "text" : type}
          autoFocus={autofocus}
          onChange={changeInputHandle}
        />
        {type === "password" && (
          <div
            className="absolute inset-y-0 left-0 flex flex-col items-center text-gray-500 hover:cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? (
              <IconlyEyeOpen className="w-5 h-4" />
            ) : (
              <IconlyEyeClose className="w-5 h-4" />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
