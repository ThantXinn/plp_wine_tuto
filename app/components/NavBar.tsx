/** @format */
"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FcPaid } from "react-icons/fc";
import Wine_icon from "../assets/plp-wine.svg";
import { navLinks } from "../constants";
import ThemeSwitch from "./ThemeSwitch";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className='border-b px-12 py-6 bg-slate-700 top-0 z-50 w-full backdrop-blur-md max-lg:py-5'>
      <nav className='flex justify-between items-center max-container'>
        <div className='flex justify-center'>
          <Link
            href={"/"}
            className='flex leading-7 text-3xl font-roboto'>
            <Image
              priority
              src={Wine_icon}
              alt='wine-image'
              width={24}
              height={24}
            />
          </Link>
        </div>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((link, index) => (
            <li
              key={index}
              className='cursor-pointer transition hover:scale-90 duration-150'>
              {pathname === link.href ? (
                <Link
                  href={link.href}
                  className='font-montserrat leading-normal text-xl text-coral-blue'>
                  {link.label}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className='font-montserrat leading-normal text-lg text-slate-300 transition duration-100 hover:text-primary'>
                  {link.label}
                </Link>
              )}
            </li>
          ))}
          <ThemeSwitch />
        </ul>
        <div className='text-3xl cursor-pointer'>
          <FcPaid />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
