/** @format */

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect } from "react";
import { darklightMode } from "../constants";

const ThemeSwitch = () => {
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    switch (resolvedTheme) {
      case "dark":
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        localStorage.setItem("theme", "light");
        break;
      default:
    }
  }, [resolvedTheme]);
  return (
    <div className='flex max-xl:w-14 max-xl:h-[33%] justify-center cursor-pointer bg-primary rounded-full'>
      {darklightMode?.map((item, index) => (
        <button
          key={index}
          id='btn_dark_toggle'
          onClick={() => setTheme(item.text)}
          className={`px-1 rounded-full hover:scale-90 ${
            resolvedTheme === (item.text || "system") && "bg-Accent-Color"
          } duration-200`}>
          <Image
            priority
            src={item.src}
            alt={item.alt}
            width={24}
            height={24}
            className='dark:invert'
          />
        </button>
      ))}
    </div>
  );
};

export default ThemeSwitch;
