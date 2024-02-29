/** @format */

import { CiDiscount1, CiLocationOn, CiShop } from "react-icons/ci";
import { GiWineBottle } from "react-icons/gi";
import { SiSanity } from "react-icons/si";
import moon_icon from "../assets/icons/icons8-moon-symbol-32.png";
import sun_icon from "../assets/icons/icons8-sun-50.png";
export const navLinks = [
  { href: "/", label: "Home", icons: <CiShop /> },
  {
    href: "/products",
    label: "Products",
    icons: <GiWineBottle />,
  },
  { href: "/offers", label: "Offers", icons: <CiDiscount1 /> },
  { href: "/regions", label: "Regions", icons: <CiLocationOn /> },
  {
    href: "/studio",
    label: "Studio",
    icons: <SiSanity className='font-extralight text-lg' />,
  },
];

export const darklightMode = [
  { src: moon_icon, alt: "dark mode", text: "dark" },
  { src: sun_icon, alt: "light mode", text: "light" },
];
