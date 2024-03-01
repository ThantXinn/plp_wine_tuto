/** @format */

import Image from "next/image";
import { FaRegCopyright } from "react-icons/fa6";
import footerLogo from "../assets/icons/plp-wine.svg";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className='max-lg:hidden h-fit bg-[#EADFDA] px-6 py-2 relative bottom-0 text-black font-light'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <div className='flex items-center'>
            <a href='/'>
              <Image
                src={footerLogo}
                alt='image'
                width={36}
                height={36}
              />
            </a>
            <p className='m-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
              Get Wines ready for the new term at your nearest PLP Wine store.
              Find Your perfect Wine In Store. Get Rewards
            </p>
          </div>
          <div className='flex items-center gap-5'>
            {socialMedia.map((icon) => (
              <div
                key={icon.alt}
                className='flex justify-center items-center w-12 h-12 cursor-pointer'>
                {icon.icon}
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap items-center relative top-6'>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className=' font-montserrat text-2xl leading-normal font-light'>
                {section.title}
                <ul>
                  {section.links.map((link) => (
                    <li
                      className='mt-3 text-black font-montserrat text-base leading-normal hover:text-slate-500 cursor-pointer'
                      key={link.name}>
                      <a>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </h4>
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-between text-white-400 mt-4 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <FaRegCopyright className='w-6 h-6' />
          <p className=''>Copyright. All rights reserved.</p>
          <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
