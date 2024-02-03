/** @format */

import { groq } from "next-sanity";
import Banner from "./components/Banner";
import { client } from "./config/sanity";

const bannerQuery = groq`*[_type == 'banner']{
  image,
  _id,
} | order(createdAt asc)`;

const Home = async () => {
  const banners_img = await client.fetch(bannerQuery);
  console.log(banners_img);
  return (
    <div className='max-w-screen-2xl mx-auto font-bodyFont'>
      <Banner banners_img={banners_img} />
    </div>
  );
};

export default Home;
