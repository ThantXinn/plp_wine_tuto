/** @format */

import { CiDiscount1, CiLocationOn, CiShop } from "react-icons/ci";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";
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

export const footerLinks = [
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@plpWine.com", link: "mailto:customer@nike.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  {
    icon: <FaSquareFacebook className='w-full h-full p-2' />,
    alt: "facebook logo",
  },
  {
    icon: <FaSquareXTwitter className='w-full h-full p-2' />,
    alt: "twitter logo",
  },
  {
    icon: <FaSquareInstagram className='w-full h-full p-2' />,
    alt: "instagram logo",
  },
];
