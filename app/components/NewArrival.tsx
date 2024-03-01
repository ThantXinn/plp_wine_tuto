/** @format */
"use client";
import { ContentType } from "@/type/contentType";
import { ProductType } from "@/type/productType";
import { MdBrightnessAuto } from "react-icons/md";
import Slider from "react-slick";
import "swiper/css";
import Container from "./Contanier";
import Content from "./Content";
import LeftArrow from "./LeftArrow";
import ProductCard from "./ProductCard";
import RightArrow from "./RightArrow";
interface Props {
  newarrival_products: ProductType[];
  contents: ContentType[];
}
const NewArrival = ({ newarrival_products, contents }: Props) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow:
      newarrival_products?.length > 3 ? 3 : newarrival_products?.length,
    slidesToScroll: 1,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <Container
      className='-mt-[26rem] max-lg:-mt-[12rem] flex flex-col
     items-center justify-center h-full'>
      <Content
        contents={contents}
        icons={<MdBrightnessAuto />}
      />
      <div className='flex w-full h-full items-center justify-center'>
        <Slider
          {...settings}
          className='w-full relative flex items-center justify-center z-auto'>
          {newarrival_products?.map((item: ProductType) => (
            <div
              key={item?._id}
              className='px-6 max-lg:px-0'>
              <ProductCard products={item} />
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default NewArrival;
