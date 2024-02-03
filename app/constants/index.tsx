/** @format */

import { FcAbout, FcAddressBook, FcBiomass, FcShop } from "react-icons/fc";
import moon_icon from "../assets/icons/icons8-moon-symbol-32.png";
import sun_icon from "../assets/icons/icons8-sun-50.png";
export const navLinks = [
  { href: "/", label: "Home", icons: <FcShop /> },
  { href: "/about", label: "About", icons: <FcAbout /> },
  { href: "/project", label: "Project", icons: <FcBiomass /> },
  { href: "/contact", label: "Contact", icons: <FcAddressBook /> },
];

export const darklightMode = [
  { src: moon_icon, alt: "dark mode", text: "dark" },
  { src: sun_icon, alt: "light mode", text: "light" },
];
