/** @format */
"use client";
import AddToCart from "@/app/components/AddtoCart";
import Container from "@/app/components/Contanier";
import RatingStar from "@/app/components/RatingStar";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { ProductType } from "@/type/productType";
import { PortableText } from "@portabletext/react";
import { groq } from "next-sanity";
import Image from "next/image";
import { useEffect, useState } from "react";

const ProductDetail = ({ params }: { params: { slag: string } }) => {
  const ProductDetailQuery = groq`*[_type == 'product' && slug.current == "${params.slag}"][0]{
    ...,
    "productby":productby[]->title,
    "winetype":winetypes[]->title
    }`;
  const [productDetails, setProductDetails] = useState<ProductType>();
  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const ProductDetail: ProductType = await client.fetch(
          ProductDetailQuery,
        );
        setProductDetails(ProductDetail);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProductDetail();
  }, []);
  if (!productDetails) return null;
  return (
    <Container>
      <div className='flex justify-between max-lg:flex-col max-lg:items-center max-lg:gap-3 h-full px-3'>
        <div className='flex justify-between max-sm:flex-col max-lg:items-center max-lg:w-3/4'>
          <div>
            <Image
              src={urlForImage(productDetails.image[0])}
              alt='product_image'
              width={320}
              height={320}
              className='rounded'
            />
          </div>
          <div className='flex flex-col p-12 gap-3'>
            <div className='relative -top-5'>
              <h1 className='text-3xl leading-7 max-lg:text-lg font-semibold max-lg:font-light cursor-pointer'>
                {productDetails.title}
              </h1>
            </div>
            <div className='flex flex-col gap-2 text-base py-4'>
              <div className='flex gap-2'>
                <h3>product by</h3>
                <div className='underline hover:text-Button-Color transition-all duration-150'>
                  {productDetails.productby}
                </div>
              </div>
              <div className='flex gap-2'>
                <h3>wine type</h3>
                <div className='underline hover:text-Button-Color transition-all duration-150'>
                  <h3>{productDetails.winetype}</h3>
                </div>
              </div>
            </div>
            <div className='flex items-start justify-evenly w-36 gap-2  mt-3'>
              <div className='h-12 flex'>
                <h1 className='text-4xl font-light leading-[44px]'>
                  {productDetails.rating}
                </h1>
              </div>
              <div className='flex flex-col items-start justify-center w-4/5 h-[90%] px-2 text-sm'>
                <RatingStar rating={productDetails.rating} />
              </div>
            </div>
            <div className='relative mt-4'>
              <PortableText value={productDetails.body} />
            </div>
            <div>
              <h1>Wine Details</h1>
              <p>{productDetails.description}</p>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center w-1/3 h-1/2 max-lg:w-full relative max-sm:-top-7'>
          <div className='max-lg:w-3/4 max-sm:h-2/5'>
            <AddToCart productDetails={productDetails} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;
