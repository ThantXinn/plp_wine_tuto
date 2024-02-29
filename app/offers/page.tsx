/** @format */

"use client";
import { ProductsQueryReturn } from "@/groqQuery";
import { client } from "@/sanity/lib/client";
import { CategoryType } from "@/type/categoryType";
import { ProductType } from "@/type/productType";
import { WineType } from "@/type/wineType";
import { groq } from "next-sanity";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Category from "../components/Category";
import Container from "../components/Contanier";
import PriceRange from "../components/PriceRange";
import ProductCard from "../components/ProductCard";
import WineCategory from "../components/WineCategory";

const OfferPage = () => {
  const pathname = usePathname();
  const [products, setProducts] = useState<ProductType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [winetypes, setWineTypes] = useState<WineType[]>([]);
  const minPrice: number = 3000;
  const maxPrice: number = 75000;
  const [priceValue, setPriceValue] = useState([minPrice, maxPrice]);

  /* click event for wine-type */
  const [winetypeClickedValues, setWineTypeClickedValues] = useState<string[]>(
    [],
  );
  const handleOnWineTypeClick = (value: string) => {
    if (winetypeClickedValues.includes(value)) {
      setWineTypeClickedValues((prevButtons) =>
        prevButtons.filter((item) => item !== value),
      );
    } else {
      setWineTypeClickedValues((prevButtons) => [...prevButtons, value]);
    }
  };
  const getProduct_SelectedWineQuery = `winetypes[0]->title in ['${winetypeClickedValues.join(
    "','",
  )}' ]`;

  /* click event for category */
  const [categoryClickedValues, setCategoryClickedValues] = useState<string[]>(
    [],
  );
  const handleOnCategoryClick = (value: string) => {
    if (categoryClickedValues.includes(value)) {
      setCategoryClickedValues((prevButtons) =>
        prevButtons.filter((item) => item !== value),
      );
    } else {
      setCategoryClickedValues((prevButtons) => [...prevButtons, value]);
    }
  };
  const getProduct_SelectedCategoryQuery = `productby[0]->title in ['${categoryClickedValues.join(
    "','",
  )}' ]`;

  const allcategoriesQuery = groq`*[_type == 'productby']{
    _id,title
  } | order(_createdAt asc)`;

  const allwinetypesQuery = groq`*[_type == 'winetypes']{
    _id,title
  } | order(_createdAt asc)`;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        //for all products
        const product_data: ProductType[] = await client.fetch(
          ProductsQueryReturn({
            priceValue,
            winetypeClickedValues,
            categoryClickedValues,
            getProduct_SelectedWineQuery,
            getProduct_SelectedCategoryQuery,
            isDiscount: true,
          }),
        );
        setProducts(product_data);
        //for category
        const category_data: CategoryType[] = await client.fetch(
          allcategoriesQuery,
        );
        setCategories(category_data);
        //for winetypes
        const winetype_data: WineType[] = await client.fetch(allwinetypesQuery);
        setWineTypes(winetype_data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [
    ProductsQueryReturn({
      priceValue,
      winetypeClickedValues,
      categoryClickedValues,
      getProduct_SelectedWineQuery,
      getProduct_SelectedCategoryQuery,
    }),
  ]);

  return (
    <Container className='flex flex-col justify-center'>
      <header className='font-bold leading-8 text-lg p-4'>
        Showing {products.length} Discounted{" "}
        {products.length > 1 ? "wines" : "wine"} between ¥1,000 - ¥
        {priceValue[1]} rated above 3.8 stars
      </header>
      <div>
        <div className='flex justify-between p-4 flex-wrap max-xl:justify-center'>
          <div className='flex flex-col gap-2 flex-wrap max-xl:flex-row max-xl:grid max-xl:grid-cols-2 max-sm:grid-cols-1 max-xl:justify-center'>
            {/* Seciton For Wine Types */}
            <div className='flex gap-2 flex-col p-2'>
              <div>
                <h2 className='text-lg leading-5 font-semibold'>Wine Types</h2>
              </div>
              <div className='grid grid-rows-2 gap-2 font-extralight lg:grid-cols-3 grid-cols-2'>
                {winetypes.map((item) => (
                  <div key={item._id}>
                    <WineCategory
                      winetypes={item}
                      onClick={(e) =>
                        handleOnWineTypeClick(e.currentTarget.value)
                      }
                      className={
                        winetypeClickedValues.includes(item.title)
                          ? "bg-Button-Color"
                          : "border-[1px] border-Button-Color"
                      }
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Section For Category */}
            <div className='flex flex-col gap-2 p-2'>
              <div>
                <h2 className='text-lg leading-5 font-semibold'>Product By</h2>
              </div>
              <div className='grid lg:grid-cols-3 grid-rows-2 gap-2 font-extralight grid-cols-2'>
                {categories.map((item) => (
                  <div key={item._id}>
                    <Category
                      categories={item}
                      onClick={(e) =>
                        handleOnCategoryClick(e.currentTarget.value)
                      }
                      className={
                        categoryClickedValues.includes(item.title)
                          ? "bg-Button-Color"
                          : "border-[1px] border-Button-Color"
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* Section For Price Range*/}
            <div className='flex flex-col gap-2 p-2'>
              <div>
                <h2 className='text-lg leading-5 font-semibold'>Price Range</h2>
              </div>
              <div>
                <PriceRange
                  minPrice={minPrice}
                  maxPrice={maxPrice}
                  value={priceValue}
                  onChange={setPriceValue}
                />
              </div>
            </div>
          </div>
          <div className='flex w-2/3 justify-center flex-col mt-2 max-lg:-mt-2 max-xl:w-4/5 max-xl:grid max-xl:grid-cols-2 max-sm:grid-cols-1'>
            {products.map((item) => (
              <div
                key={item._id}
                className='py-2'>
                <ProductCard
                  products={item}
                  pageProps={pathname}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default OfferPage;
