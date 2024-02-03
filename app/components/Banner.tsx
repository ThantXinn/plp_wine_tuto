/** @format */
"use client";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { urlFor } from "../config/sanity";

const Banner = ({ banners_img }: any) => {
  return (
    <div className='relative'>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}>
        {banners_img.map((item: any) => (
          <div key={item._id}>
            <Image
              priority
              src={urlFor(item.image).url()}
              alt='banner image'
              width={1020}
              height={1020}
            />
          </div>
        ))}
      </Carousel>
      <div className='w-full h-40 bg-gradient-to-t from-gray-600 to-transparent absolute bottom-0 z-20'></div>
    </div>
  );
};
export default Banner;
