/** @format */
"use client";
import { resetCart } from "@/redux/plpWineSlice";
import { config } from "@/type";
import { StoreProductType } from "@/type/productType";
import { loadStripe } from "@stripe/stripe-js";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import emptyCartImage from "../assets/icons/emptyCart.png";
import CartItemCard from "../components/CartItemCard";
import Container from "../components/Contanier";

const Cart = () => {
  const { productData } = useSelector(
    (state: StoreProductType) => state.plpWine,
  );
  const { data: session } = useSession();
  const [total, setTotal] = useState<number>(0);
  const dispatch = useDispatch();
  useEffect(() => {
    let totalPrice = 0;
    productData.map((item) => {
      totalPrice += item.totalPrice!;
      return totalPrice;
    });
    setTotal(totalPrice);
  }, [productData]);

  const handleReset = () => {
    const confirmed = window.confirm("Are you sure reset your cart?");
    confirmed &&
      dispatch(resetCart(), toast.success("Cart reset successfully!"));
  };

  //stripe payment-checkout

  const stripePromise = loadStripe(config.stripe_public_key!);
  const handleCheckOut = async () => {
    if (session?.user) {
      const stripe = await stripePromise;
      const res = await fetch(`http://localhost:3000/api/checkout`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          items: productData,
          email: session.user.email,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        stripe?.redirectToCheckout({ sessionId: data.id });
      }
    } else {
      toast.error("Please sign in to procced checkout!");
    }
  };
  return (
    <Container className='px-2 max-lg:py-3'>
      {productData.length > 0 ? (
        <div className='px-3'>
          <div className='w-full grid max-sm:hidden max-lg:grid-cols-11 grid-cols-9 p-2'>
            <div className='col-span-2'>
              <h1>Procuct</h1>
            </div>
            <div className='flex justify-end col-span-3 max-lg:col-span-4'>
              <h1>Quantity</h1>
            </div>
            <div className='flex justify-end px-10 col-span-2 max-lg:col-span-3 max-lg:px-0'>
              <h1>Item Price</h1>
            </div>
            <div className='flex justify-end px-5 col-span-2'>
              <h1>Total</h1>
            </div>
          </div>
          <div className='w-full bg-white shadow-zinc-400 shadow-md text-black rounded overflow-hidden p-4'>
            {productData.map((item) => (
              <CartItemCard
                cartItems={item}
                key={item._id}
              />
            ))}
          </div>
          <div className='grid grid-cols-2 py-4 gap-2'>
            <div>
              <button
                onClick={handleReset}
                className='bg-Button-Color h-10 w-28 rounded shadow-md shadow-zinc-400 max-lg:text-xs max-lg:h-7 hover:scale-95 transition-transform duration-150'>
                RESET
              </button>
            </div>
            <div className='grid grid-cols-1 gap-7 px-2 *:border-b-[1px] *:border-slate-400 *:py-2 max-lg:text-xs max-lg:gap-2'>
              <div className='grid grid-cols-2'>
                <p>Subtotal</p>
                <p className=' text-end mr-3'>{total}</p>
              </div>
              <div className='grid grid-cols-2'>
                <p>Tax</p>
                <p className=' text-end mr-3'>Included</p>
              </div>
              <div className='grid grid-cols-2'>
                <p>Shipping</p>
                <p className=' text-end mr-3'>FREE</p>
              </div>
              <div className='grid grid-cols-2'>
                <p>Total</p>
                <p className=' text-end mr-3'>{total}</p>
              </div>
            </div>
            <div></div>
            <div className='flex items-center justify-end max-lg:text-xs'>
              <button
                onClick={handleCheckOut}
                className='w-56 h-10 max-lg:h-7 rounded-full bg-Accent-Color hover:scale-95 transition-transform duration-150'>
                Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='flex flex-col w-full items-center justify-center py-5 gap-5'>
          <Image
            src={emptyCartImage}
            alt='emptyCartImage'
            width={480}
            height={480}
            className='object-contain w-56 h-56 animate-pulse mx-auto p-4'
          />
          <h1 className='animate-bounce'>There is no avaliable products.</h1>
          <Link href={"/"}>
            <button className='h-12 w-52 bg-Accent-Color rounded-md text-base font-light leading-7 hover:scale-95 transition-transform duration-150'>
              Go back to home.
            </button>
          </Link>
        </motion.div>
      )}
    </Container>
  );
};
export default Cart;
