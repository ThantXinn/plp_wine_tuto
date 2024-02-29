/** @format */
import { addtoCart, decreaseQty, increaseQty } from "@/redux/plpWineSlice";
import { ProductType } from "@/type/productType";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BsCartCheck } from "react-icons/bs";
import { CiDeliveryTruck, CiShop } from "react-icons/ci";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { GiAchievement } from "react-icons/gi";
import { useDispatch } from "react-redux";
import AddToCartButton from "./AddtoCartButton";

interface Props {
  productDetails: ProductType;
}

const AddToCart = ({ productDetails }: Props) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState<number>(productDetails.quantity);

  useEffect(() => {}, [productDetails.quantity && quantity]);
  return (
    <div className='flex flex-col rounded-md overflow-hidden border-[1px] bg-Main dark:bg-Secondary-Color dark:shadow-slate-500 hover:shadow-lg transition-all duration-150'>
      <div className='flex relative w-full bg-AddtoCartTitle-Color px-2'>
        <div className=' text-yellow-600 flex justify-between items-center w-full'>
          <div className='w-20 h-14 flex items-center'>
            <GiAchievement className='text-4xl' />
          </div>
          <div className='flex w-full text-lg font-extralight'>
            <p>
              Best Pick{" "}
              <span
                className={`${
                  productDetails.discountPercentage ? "inline-block" : "hidden"
                } text-white`}>
                {" "}
                - Save {productDetails.discountPercentage}%
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className='p-4'>
        {productDetails.discountPercentage > 0 ? (
          <div className='flex items-center gap-2  min-h-16'>
            <div className='w-32'>
              <h1 className='text-3xl font-semibold leading-10 py-2'>
                <span>¥</span>
                {productDetails.originalPrice -
                  productDetails.originalPrice *
                    (productDetails.discountPercentage / 100)}
              </h1>
            </div>
            <div>
              <h3 className='text-2xl line-through font-extralight'>
                <span>¥</span>
                {productDetails.originalPrice}
              </h3>
            </div>
          </div>
        ) : (
          <div className='flex items-center min-h-16'>
            <h3 className='text-3xl font-semibold leading-10 py-2'>
              <span>¥</span>
              {productDetails.originalPrice}
            </h3>
          </div>
        )}
        <div>
          <p className='font-extralight text-sm'>Price is per bottle</p>
        </div>
      </div>
      <div className='flex flex-col w-full items-center justify-center gap-2 mt-5'>
        <div className='flex w-1/2 justify-between items-center px-5 rounded-full border-[1px] h-10 '>
          <button
            className={`${
              productDetails.quantity <= 1
                ? "cursor-not-allowed"
                : "cursor-pointer"
            }`}
            onClick={() => (
              productDetails.quantity <= 1
                ? ""
                : setQuantity(--productDetails.quantity),
              dispatch(decreaseQty({ _id: productDetails._id }))
            )}>
            <FaMinus className='text-slate-400 hover:dark:text-white hover:text-black' />
          </button>
          <div>
            {productDetails.quantity <= productDetails.instock
              ? productDetails.quantity
              : productDetails.instock}
          </div>
          <button
            onClick={() => (
              setQuantity(++productDetails.quantity),
              productDetails.quantity >= productDetails.instock
                ? toast.error(
                    `Sorry ${productDetails.title} is avaliable only ${
                      productDetails.instock > 1
                        ? `${productDetails.instock} items.`
                        : `${productDetails.instock} item.`
                    }`,
                  )
                : dispatch(increaseQty({ _id: productDetails._id }))
            )}>
            <FaPlus className='text-slate-400 hover:dark:text-white hover:text-black' />
          </button>
        </div>
        <AddToCartButton
          className='flex w-1/2 justify-center items-center px-5 rounded-full border-[1px] h-10 bg-Button-Color cursor-pointer hover:scale-95 transition-transform duration-150'
          onClick={() => {
            dispatch(addtoCart(productDetails));
            toast.success(`${productDetails.title}...added to cart.`);
          }}
        />
      </div>
      <div className='mt-2'>
        <div className='flex h-16 p-3 gap-2'>
          <BsCartCheck className='text-2xl top-1 relative' />
          <p className='font-light px-2 text-justify max-sm:text-sm'>
            You get FREE shipping on orders over ¥12000 with Allegretto
          </p>
        </div>
        <div className='flex h-16 p-3 gap-2'>
          <CiDeliveryTruck className='text-2xl top-1 relative' />
          <p className='font-light px-2 text-justify max-sm:text-sm'>
            Estimated between Wed, Feb 21 and Mon, Feb 26
          </p>
        </div>
        <div className='flex h-16 p-3 gap-2'>
          <CiShop className='text-2xl top-1 relative' />
          <p className='font-light px-2 text-justify max-sm:text-sm'>
            Sold by Allegretto
          </p>
        </div>
      </div>
    </div>
  );
};
export default AddToCart;
