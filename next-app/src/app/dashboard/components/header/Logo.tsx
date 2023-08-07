import { GeneralContext } from "@/app/contexts/GeneralContext";
import AmarsinLogo from "@/app/svg/AmarsinLogo";
import IconlyArrowRight from "@/app/svg/IconlyArrowRight";
import IconlyArrowLeft from "@/app/svg/IconlyArrowLeft";
import Link from "next/link";
import { useContext } from "react";

export default function Logo() {
  const { menuName, showMenu, setShowMenu } = useContext(GeneralContext);
  return (
    //show or hide menu due to showMenu value
    <button
      className="hover:text-indigo-800 dark:hover:text-white/80 "
      onClick={() => setShowMenu(!showMenu)}
    >
      <div className="flex m-0 items-center">
        <AmarsinLogo />
        <p className="md:text-2xl text-lg">{menuName}</p>
        {showMenu ? (
          <IconlyArrowRight className="w-6 h-6" />
        ) : (
          <IconlyArrowLeft className="w-6 h-6" />
        )}
      </div>
    </button>
  );
}
