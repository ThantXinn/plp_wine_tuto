/** @format */

import { decreaseQty, deleteProduct, increaseQty } from "@/redux/plpWineSlice";
import { urlForImage } from "@/sanity/lib/image";
import { ProductType } from "@/type/productType";
import Image from "next/image";
import toast from "react-hot-toast";
import { FaMinus, FaPlus, FaRegTrashCan } from "react-icons/fa6";
import { useDispatch } from "react-redux";

interface Props {
  cartItems: ProductType;
}
const CartItemCard = ({ cartItems }: Props) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className='flex border-b-[1px] border-b-slate-300 items-center justify-center max-sm:py-2'>
        <div className='flex w-24'>
          <Image
            src={urlForImage(cartItems.image[0])}
            alt='image'
            width={320}
            height={320}
            className='object-contain aspect-square w-20 h-24 scale-90'
          />
        </div>
        <div className='grid grid-cols-5 max-lg:grid-cols-6 w-full max-sm:flex flex-col'>
          <div className='flex flex-col justify-center items-center col-span-2 gap-2 w-full'>
            <p className='text-lg font-extralight cursor-pointer max-lg:text-sm'>
              {cartItems.title}
            </p>
            <span
              className={`text-[#00a68b] font-extralight text-xs ${
                cartItems.isDiscount ? "inline-block" : "hidden"
              }`}>
              You get {cartItems.discountPercentage}% discount on this wine
            </span>
          </div>
          <div className='flex justify-center items-center gap-1 max-sm:relative top-2 max-lg:col-span-2'>
            <div className='flex w-full justify-between items-center px-5 rounded-full border-[1px] h-10 max-lg:h-7 max-lg:w-1/2'>
              <button
                className={`${
                  cartItems.quantity <= 1
                    ? "cursor-not-allowed"
                    : "cursor-pointer"
                }`}
                onClick={() =>
                  cartItems.quantity <= 1
                    ? ""
                    : dispatch(decreaseQty({ _id: cartItems._id }))
                }>
                <FaMinus className='text-slate-400 hover:text-black' />
              </button>
              <div>{cartItems.quantity}</div>
              <button
                onClick={() =>
                  cartItems.quantity >= cartItems.instock
                    ? toast.error(
                        `Sorry ${cartItems.title} is avaliable only ${
                          cartItems.instock > 1
                            ? `${cartItems.instock} items.`
                            : `${cartItems.instock} item.`
                        }`,
                      )
                    : dispatch(increaseQty({ _id: cartItems._id }))
                }>
                <FaPlus className='text-slate-400 hover:text-black' />
              </button>
            </div>
            <button
              className='px-2 border-[1px] rounded-full w-12 h-10 max-lg:h-7 flex justify-center items-center'
              onClick={() => dispatch(deleteProduct(cartItems._id))}>
              <FaRegTrashCan className='text-slate-400 hover:text-black' />
            </button>
          </div>
          <div className='flex justify-center max-sm:justify-center max-sm:relative top-4 items-center px-2 *:max-lg:text-xs *:max-lg:font-extralight'>
            {cartItems.discountPercentage > 0 ? (
              <div className='flex flex-col items-center'>
                <div>
                  <h3 className='text-sm line-through font-light max-lg:text-xs max-lg:font-extralight'>
                    <span>¥</span>
                    {cartItems.originalPrice}
                  </h3>
                </div>
                <div>
                  <h1 className='text-lg font-light px-2 max-lg:text-xs max-lg:font-extralight'>
                    <span>¥</span>
                    {cartItems.originalPrice -
                      cartItems.originalPrice *
                        (cartItems.discountPercentage / 100)}
                  </h1>
                </div>
              </div>
            ) : (
              <div className='flex items-center'>
                <h3 className='text-lg font-light px-2 max-lg:text-xs max-lg:font-extralight'>
                  <span>¥</span>
                  {cartItems.originalPrice}
                </h3>
              </div>
            )}
          </div>
          <div className='flex justify-end items-center px-2 max-lg:text-xs max-lg:font-extralight'>
            {cartItems.isDiscount
              ? `${
                  (cartItems.originalPrice -
                    cartItems.originalPrice *
                      (cartItems.discountPercentage / 100)) *
                  cartItems.quantity
                }`
              : `${cartItems.originalPrice * cartItems.quantity}`}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartItemCard;
