"use client";
import { GeneralContext } from "@/app/contexts/GeneralContext";
import { Suspense, useContext, useEffect, useMemo, useState } from "react";
import CupboardsTable from "./components/CupboardsTable";
import SkeletonTable from "@/app/general/SkeletonTable";
import Loading from "./loading";

export default function CupboardsRep() {
  const [err, setErr] = useState(false);
  const [errId, setErrId] = useState(0);

  const { windowWidth, setWindowWidth } = useContext(GeneralContext);

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    updateWindowWidth();

    window.addEventListener("resize", updateWindowWidth);

    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, [windowWidth]);

  return (
    <section className="w-full">
      {/* top form */}
      <form
        autoComplete="off"
        className="p-2 w-full text-xs md:text-sm flex flex-col md:flex-row gap-8 items-center text-slate-800 bg-slate-300"
      >
        <div className="flex gap-2 px-2">
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setErr(e.target.checked)
            }
            checked={err}
            className="w-4 h-4 outline-none"
            type="checkbox"
          />
          <label>نمایش خطادارها</label>
        </div>
      </form>
      {/* table show */}
      <Suspense fallback={<Loading />}>
        <CupboardsTable err={err} errId={errId} />
      </Suspense>
    </section>
  );
}
