import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import IconlyMoon from "../svg/IconlyMoon";
import IconlySun from "../svg/IconlySun";

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <button
      className={`flex items-center justify-center focus:outline-none hover:text-white hover:bg-indigo-500 p-2 rounded-lg ml-2`}
      onClick={toggleTheme}
      aria-label="Toggle Dark Mode"
    >
      {theme === "light" ? (
        <IconlyMoon className="w-6 h-6" />
      ) : (
        <IconlySun className="w-6 h-6" />
      )}
    </button>
  );
}
