import { groq } from "next-sanity";

interface Props{
    priceValue: number[],
    winetypeClickedValues: string[],
    categoryClickedValues: string[],
    getProduct_SelectedWineQuery: string,
    getProduct_SelectedCategoryQuery: string,
  isDiscount?: boolean;
}
export const ProductsQueryReturn = ({priceValue,winetypeClickedValues,categoryClickedValues,getProduct_SelectedWineQuery,getProduct_SelectedCategoryQuery,isDiscount}:Props) => {
    let getAllProducts = groq`*[_type == 'product' && originalPrice >= ${priceValue[0]} && originalPrice <= ${priceValue[1]} ${isDiscount ? '&&  isDiscount': ''}]{
    ...,
    "productby":productby[]->title
    } | order(_createdAt asc)`;

    if (winetypeClickedValues.length > 0 && categoryClickedValues.length > 0) {
      getAllProducts = groq`*[_type == 'product' && ${getProduct_SelectedWineQuery} && ${getProduct_SelectedCategoryQuery}]{
        ...,
        "productby":productby[]->title
        } | order(_createdAt asc)`;
      return getAllProducts;
    } else if (
      winetypeClickedValues.length > 0 ||
      categoryClickedValues.length > 0
    ) {
      if (winetypeClickedValues.length > 0) {
        getAllProducts = groq`*[_type == 'product' && ${getProduct_SelectedWineQuery}]{
        ...,
        "productby":productby[]->title
        } | order(_createdAt asc)`;
      } else {
        getAllProducts = groq`*[_type == 'product' &&  ${getProduct_SelectedCategoryQuery}]{
        ...,
        "productby":productby[]->title
        } | order(_createdAt asc)`;
      }
      return getAllProducts;
    } else {
      return getAllProducts;
    }
  };