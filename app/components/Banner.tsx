/** @format */
"use client";
import { urlForImage } from "@/sanity/lib/image";
import { BannerImageType } from "@/type/bannerType";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Props {
  banner_imgs: BannerImageType[];
}
const Banner = ({ banner_imgs }: Props) => {
  return (
    <div className='relative flex opacity-75'>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}>
        {banner_imgs.map((item: BannerImageType) => (
          <div
            key={item.title}
            className='relative w-full h-auto'>
            <Image
              priority
              src={urlForImage(item.image.asset)}
              alt='banner_image'
              width={780}
              height={780}
              className='flex object-cover object-center aspect-video w-full h-full'
            />
          </div>
        ))}
      </Carousel>
      <div className='w-full h-40 bg-gradient-to-t from-gray-700 to-transparent absolute bottom-0 z-20'></div>
    </div>
  );
};
export default Banner;
