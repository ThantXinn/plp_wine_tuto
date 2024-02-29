/** @format */
"use client";
import { StoreProductType } from "@/type/productType";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegCircleUser } from "react-icons/fa6";
import { FcPaid } from "react-icons/fc";
import { useSelector } from "react-redux";
import Wine_icon from "../assets/icons/plp-wine.svg";
import { navLinks } from "../constants";
import ThemeSwitch from "./ThemeSwitch";

const Navbar = () => {
  const pathname = usePathname();
  const { productData } = useSelector(
    (state: StoreProductType) => state.plpWine,
  );
  const { data: session } = useSession();

  return (
    <header className='border-b font-light px-12 py-6 shadow-md bg-Navbar-Color dark:bg-Navbar-Dark-Color sticky top-0 z-50 w-full backdrop-blur-md max-lg:py-5 max-lg:px-5'>
      <nav className='flex justify-between items-center max-container'>
        <div className='flex justify-center group'>
          <Link
            href={"/"}
            className='flex leading-7 text-3xl font-roboto group-hover:scale-95 transition-transform duration-150'>
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
                  className='flex items-center justify-center gap-2 '>
                  <span className='font-medium text-2xl'>{link.icons}</span>
                  <div className='font-montserrat leading-normal text-Accent-Color text-base mt-2'>
                    {link.label}
                  </div>
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className='flex items-center justify-center gap-2'>
                  <span className='font-medium text-2xl'>{link.icons}</span>
                  <div className='font-montserrat leading-normal text-base dark:text-Main transition duration-100 hover:text-primary mt-2'>
                    {link.label}
                  </div>
                </Link>
              )}
            </li>
          ))}
          <ThemeSwitch />
        </ul>
        <div className='flex items-center justify-between gap-4 h-8'>
          <div className='group'>
            <div
              className={`relative text-xl font-extralight cursor-pointer hover:scale-90 transition-transform duration-150`}>
              {session?.user ? (
                <div className='flex flex-col items-center justify-center hover:cursor-pointer'>
                  <Image
                    src={session.user?.image!}
                    alt='user_image'
                    width={24}
                    height={24}
                    className='object-contain rounded-full w-6 h-6'
                  />
                  <span className='text-xs font-light'>
                    {session.user?.name}
                  </span>
                </div>
              ) : (
                <FaRegCircleUser />
              )}
            </div>
            <div
              className={`hidden group-hover:flex absolute ${
                session?.user
                  ? "-bottom-[6px] max-lg:-bottom-[10px]"
                  : "bottom-0"
              } right-[75px] bg-Secondary-Color dark:bg-Background-Color w-20 h-8 items-center justify-center rounded hover:scale-95 cursor-pointer`}>
              <button
                onClick={() => {
                  session?.user ? signOut() : signIn();
                }}
                className='text-sm font-light dark:text-Secondary-Color text-white max-lg:text-xs'>
                {session?.user ? "Sign Out" : "Sign In"}
              </button>
            </div>
          </div>
          <Link
            href={"/cart"}
            className='relative text-3xl cursor-pointer hover:scale-90 transition-transform duration-150'>
            <span
              className={`${
                productData.length <= 0 ? "hidden" : "flex"
              } w-5 h-5 rounded-full bg-slate-500 text-sm items-center justify-center absolute -right-3 -top-1 max-lg:text-xs`}>
              {productData.length}
            </span>
            <FcPaid />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
