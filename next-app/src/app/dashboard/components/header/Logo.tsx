import { GeneralContext } from "@/app/contexts/GeneralContext";
import AmarsinLogo from "@/app/svg/AmarsinLogo";
import IconlyArrowRight from "@/app/svg/IconlyArrowRight";
import IconlyArrowLeft from "@/app/svg/IconlyArrowLeft";
import Link from "next/link";
import { useContext } from "react";

export default function Logo() {
  const { showMenu, setShowMenu } = useContext(GeneralContext);
  return (
    <button
      className="hover:text-indigo-800 dark:hover:text-white/80 "
      onClick={() => setShowMenu(!showMenu)}
    >
      <div className="flex m-0 items-center">
        <AmarsinLogo />
        <p className="text-2xl hidden  md:block">آمارسین</p>
        {showMenu ? (
          <IconlyArrowLeft className="w-6 h-6" />
        ) : (
          <IconlyArrowRight className="w-6 h-6" />
        )}
      </div>
    </button>
  );
}
