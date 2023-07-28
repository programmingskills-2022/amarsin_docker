import { GeneralContext } from "@/app/contexts/GeneralContext";
import { persistor } from "@/app/redux";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { selectLoginData } from "@/app/redux/login";
import IconlyExit from "@/app/svg/IconlyExit";
import IconlyProfile from "@/app/svg/IconlyProfile";
import DropdownMenu from "@/app/ui/DropdownMenu";
import DropdownMenuItem from "@/app/ui/DropdownMenuItem";
import { useRouter } from "next/navigation";
import { LegacyRef, useContext, useRef } from "react";

export default function ProfileMenu() {
  const router = useRouter();
  const { setShowProfileMenu } = useContext(GeneralContext);

  const login = useAppSelector(selectLoginData);
  if (login?.Data === undefined) return undefined;

  const { FName, LName, userId } = login.Data?.result;
  return (
    <>
      <DropdownMenu>
        <DropdownMenuItem
          iconName="پروفایل کاربری"
          icon={<IconlyProfile className="w-4 h-4" />}
          className="px-4 py-2 border-b-2 border-white/50"
          href={`/dashboard/${userId}`}
          onClick={() => {
            setShowProfileMenu(false);
          }}
        />
        <DropdownMenuItem
          iconName="خروج"
          icon={<IconlyExit className="w-4 h-4" />}
          className="px-4 py-2 border-none"
          href="/"
          onClick={() => {
            setShowProfileMenu(false);
            window.localStorage.clear();
            // persist redux delete
            // persistor.pause();
            // persistor.flush().then(() => {
            //   return persistor.purge();
            // });
            //persistor.purge();
          }}
        />
      </DropdownMenu>
    </>
  );
}

{
}
