/** @format */

"use client";
import { ContentType } from "@/type/contentType";
import { ProductType } from "@/type/productType";
import { FaGrinStars } from "react-icons/fa";
import Slider from "react-slick";
import "swiper/css";
import Container from "./Contanier";
import Content from "./Content";
import LeftArrow from "./LeftArrow";
import ProductCard from "./ProductCard";
import RightArrow from "./RightArrow";

interface Props {
  mostpopular_products: ProductType[];
  contents: ContentType[];
}
const MostPopular = ({ mostpopular_products, contents }: Props) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow:
      mostpopular_products.length > 3 ? 3 : mostpopular_products.length,
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
      className='-mt-24 flex flex-col
     items-center justify-center h-full relative'>
      <div className='-mt-5 max-lg:-mt-20 relative flex'>
        <Content
          contents={contents}
          icons={<FaGrinStars />}
        />
      </div>
      <div className='flex w-full h-full items-center justify-center'>
        <Slider
          {...settings}
          className='w-full relative flex items-center justify-center'>
          {mostpopular_products?.map((item: ProductType) => (
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

export default MostPopular;
