/** @format */

import { client } from "@/sanity/lib/client";
import { BannerImageType } from "@/type/bannerType";
import { ContentType } from "@/type/contentType";
import { ProductType } from "@/type/productType";
import { groq } from "next-sanity";
import Banner from "./components/Banner";
import HomeBanner from "./components/HomeBanner";
import MostPopular from "./components/MostPopular";
import NewArrival from "./components/NewArrival";

export const revalidate = 10;
const bannerQuery = groq`*[_type == 'banner']{
    title,
    image{asset{_ref}}
  } | order(_createdAt asc)`;
const newArrivalQuery = groq`*[_type == 'product' && isNew]{
    ...,
    "productby":productby[]->title
  } | order(_createdAt asc)`;
const homeBannerQuery = groq`*[_type == 'homeBanner'] {
  _id,
  title,
    image{asset{_ref}}
  }`;
const mostPopularContentQuery = groq`*[_type == 'content' && title == 'Most Popular']{
    title,description,"category":category[]->title
  } | order(_createdAt asc)`;
const newArrivalContentQuery = groq`*[_type == 'content' && title == 'New Arrival']{
    title,description,"category":category[]->title
  } | order(_createdAt asc)`;
const mostPopularQuery = groq`*[_type == 'product' && rating>3.8]{
    ...,
    "productby":productby[]->name
  } | order(_createdAt asc)`;

const Home = async () => {
  const banner_imgs: BannerImageType[] = await client.fetch(bannerQuery);
  const homebanner_imgs: BannerImageType[] = await client.fetch(
    homeBannerQuery,
  );
  const newarrival_products: ProductType[] = await client.fetch(
    newArrivalQuery,
  );
  const newArrivalContents: ContentType[] = await client.fetch(
    newArrivalContentQuery,
  );
  const mostpopular_products: ProductType[] = await client.fetch(
    mostPopularQuery,
  );
  const mostPopularContents: ContentType[] = await client.fetch(
    mostPopularContentQuery,
  );

  return (
    <main className='max-w-screen-2xl mx-auto font-bodyFont h-screen'>
      <Banner banner_imgs={banner_imgs} />
      <NewArrival
        newarrival_products={newarrival_products}
        contents={newArrivalContents}
      />
      <HomeBanner homebanner_imgs={homebanner_imgs} />
      <MostPopular
        mostpopular_products={mostpopular_products}
        contents={mostPopularContents}
      />
    </main>
  );
};
export default Home;
