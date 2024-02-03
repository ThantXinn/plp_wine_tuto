/** @format */

import Link from "next/link";
import { navLinks } from "../constants";
import ThemeSwitch from "./ThemeSwitch";

const Footer = () => {
  return (
    <footer>
      <div
        className={`hidden max-lg:flex gap-3 px-3 justify-between items-center absolute bottom-0 right-0 w-screen h-16 cursor-pointer bg-slate-700`}>
        {/*
          <div
            onClick={() => setOpen(!open)}
            className={`absolute top-5 right-7 duration-300 ${
              open ? "invert dark:invert-0" : "invert-0 dark:invert "
            }`}>
            {!open ? <FcMenu /> : <FcNext />}
          </div>
          */}
        {navLinks.map((link, index) => (
          <div
            key={index}
            className='flex justify-center items-center gap-4'>
            <Link
              href={link.href}
              className='px-3 md:px-7 flex font-montserrat leading-normal text-slate-gray text-2xl'>
              {link.icons}
            </Link>
          </div>
        ))}
        <ThemeSwitch />
      </div>
    </footer>
  );
};

export default Footer;
