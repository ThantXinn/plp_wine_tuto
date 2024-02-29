/** @format */
"use client";
import { addtoCart } from "@/redux/plpWineSlice";
import { urlForImage } from "@/sanity/lib/image";
import { ProductType } from "@/type/productType";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { CiCircleMore } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import AddToCartButton from "./AddtoCartButton";
import RatingStar from "./RatingStar";

/** @format */
interface Props {
  products: ProductType;
  pageProps?: string;
}
const ProductCard = ({ products, pageProps }: Props) => {
  const dispatch = useDispatch();
  return (
    <div
      className={`flex relative p-2 mx-auto max-lg:mt-8 rounded-lg border-[1px] border-slate-200 backdrop-blur-md max-lg:items-center max-sm:w-60 items-center md:w-fit h-auto gap-2 group cursor-pointer mb-1 bg-white dark:bg-transparent dark:shadow-slate-500 hover:shadow-lg transition-all duration-150 max-sm:justify-center group`}>
      <div className='w-full'>
        <div
          className={`relative flex w-full h-full max-xl:flex-col min-h-64 ${
            pageProps !== undefined ? "items-center" : "flex-col"
          }`}>
          {/* label for new and discount */}
          <div
            className={`${
              products.isNew ? "bg-Button-Color shadow-md" : "hidden"
            } rounded-br-md rounded-tl-md absolute top-0 -left-[1px] px-2 h-8 max-sm:h-6 flex items-center  max-sm:z-10 text-white`}>
            {products.isNew ? (
              <h1 className='max-lg:text-xs'>
                New
                <div
                  className={`bg-Accent-Color absolute  
             -right-7 max-sm:-right-[35px] max-sm:top-6 px-2 ${
               products.isDiscount &&
               "h-6 w-auto top-8 max-sm:top-0 rounded-bl-md rounded-tr-md"
             } flex items-center justify-center shadow-md max-sm:z-10 text-white`}>
                  {products.isDiscount ? (
                    <h1 className='text-xs flex'>
                      {products.discountPercentage}% OFF
                    </h1>
                  ) : null}
                </div>
              </h1>
            ) : null}
          </div>
          <div
            className={`${
              products.isDiscount && !products.isNew
                ? "bg-Accent-Color shadow-md"
                : "hidden"
            } rounded-br-md rounded-tl-md absolute top-0 left-0 px-2 h-8 max-sm:h-6 flex items-center max-sm:z-10 text-white`}>
            {products.isDiscount ? (
              <h1 className='text-xs flex'>
                {products.discountPercentage}% OFF
              </h1>
            ) : null}
          </div>

          {/* for product image and add-to-cart / details button */}
          <div className={`flex flex-col`}>
            {products.image.map((images: any, index: number) => (
              <div
                key={index}
                className='lg:w-72 h-80 w-60 max-sm:w-56 max-lg:h-auto '>
                <Image
                  src={urlForImage(images)}
                  alt='product_image'
                  width={720}
                  height={720}
                  className='object-contain w-full h-full object-center aspect-square rounded-md bg-Main'
                />

                <div
                  className={`opacity-0 group-hover:opacity-100 absolute ${
                    pageProps !== undefined
                      ? "bottom-0 max-xl:bottom-52"
                      : "bottom-24"
                  } flex items-center justify-between lg:w-72 w-full px-2 gap-6 -translate-y-2 group-hover:-translate-y-6 duration-200 transition-all text-slate-100`}>
                  <AddToCartButton
                    className='flex justify-center items-center bg-Button-Color p-2 rounded gap-1 w-36 max-lg:w-fit scale-100 hover:scale-95 transition-all duration-150'
                    icon={<FaCartPlus />}
                    onClick={() => {
                      dispatch(addtoCart(products));
                      toast.success(`${products.title}...added to cart.`);
                    }}
                  />
                  <Link
                    href={`/products/${products.slug.current}`}
                    className='flex justify-center items-center bg-Button-Color p-2 rounded gap-1 w-36 max-lg:w-fit scale-100 hover:scale-95 transition-all duration-150'>
                    <span className='text-sm max-lg:hidden'>Details</span>
                    <CiCircleMore />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* for product title and price / discount price */}
          <div className={`flex flex-col lg:min-w-72 w-full `}>
            <div className='px-2 h-full flex items-center justify-between max-sm:z-10'>
              <div>
                <h2 className='text-lg font-raleway font-semibold max-lg:text-xs max-sm:mt-4'>
                  {products.title}
                </h2>
              </div>
              <div className='px-2 h-9 flex flex-col justify-center items-center font-roboto font-semibold max-sm:z-10'>
                <div
                  className={`${products.isDiscount ? "mt-0" : "max-lg:mt-3"}`}>
                  {products.isDiscount ? (
                    <div className='flex flex-col items-center'>
                      <span className='mt-4 max-lg:text-sm font-normal'>
                        {"¥ "}
                        {products.originalPrice -
                          products.originalPrice *
                            (products.discountPercentage / 100)}
                      </span>
                      <span className='line-through text-xs font-light'>
                        {"¥ "}
                        {products.originalPrice}
                      </span>
                    </div>
                  ) : (
                    <span className='max-lg:text-sm font-normal'>
                      ¥ {products.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* for product maker and rating */}
            <div
              className={`flex w-full items-center justify-between px-2 mt-2 max-lg:text-xs ${
                pageProps !== undefined
                  ? "border-b-[1px] py-4 lg:ml-1"
                  : "border-b-0"
              }`}>
              <p className='text-sm max-lg:text-xs'>
                product of
                <span className='px-2 font-medium text-lg max-lg:text-sm'>
                  {products.productby}
                </span>
              </p>
              <div className='flex flex-col items-center justify-center'>
                <span className='flex items-center justify-center font-semibold leading-7 text-lg max-lg:text-sm'>
                  {products.rating}
                </span>
                <RatingStar rating={products.rating} />
              </div>
            </div>

            <div
              className={`${
                pageProps !== undefined ? "flex" : "hidden"
              } w-full min-h-20 mt-2 max-lg:px-0 px-4`}>
              <PortableText value={products.body} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
