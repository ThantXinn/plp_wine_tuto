/** @format */
"use client";
import { urlForImage } from "@/sanity/lib/image";
import { BannerImageType } from "@/type/bannerType";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Props {
  homebanner_imgs: BannerImageType[];
}
const HomeBanner = ({ homebanner_imgs }: Props) => {
  return (
    <div className='relative -top-[5%] max-lg:-top-[10%] flex opacity-85 w-full h-1/2 max-lg:h-1/3 px-10 items-center justify-center'>
      <Carousel
        autoPlay
        infiniteLoop={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
        className='h-full max-lg:h-3/4 flex '>
        {homebanner_imgs.map((item: BannerImageType) => (
          <div
            key={item._id}
            className={`relative w-full h-full`}>
            <Image
              priority
              src={urlForImage(item.image.asset)}
              alt='banner_image'
              width={780}
              height={780}
              className='flex object-cover object-center aspect-auto w-full h-full'
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default HomeBanner;
