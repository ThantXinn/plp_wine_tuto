/** @format */
"use client";
import { resetCart } from "@/redux/plpWineSlice";
import { motion } from "framer-motion";
import Link from "next/link";
import { useDispatch } from "react-redux";
import Container from "../components/Contanier";

const SuccessPage = ({ searchParams }: any) => {
  const dispatch = useDispatch();

  dispatch(resetCart());
  return (
    <Container>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='flex flex-col w-full items-center justify-center py-5 gap-5'>
        <h1 className='animate-bounce'>
          Your payment is successfully to PLP Wine.
        </h1>
        <div className='flex items-center justify-center p-2 gap-4'>
          <Link
            href={"/orders"}
            className='hidden'>
            <button className='h-12 w-52 bg-Accent-Color rounded-md text-base font-light leading-7 hover:scale-95 transition-transform duration-150'>
              View your orders.
            </button>
          </Link>
          <Link href={"/"}>
            <button className='h-12 w-52 bg-Accent-Color rounded-md text-base font-light leading-7 hover:scale-95 transition-transform duration-150'>
              Continue to shopping.
            </button>
          </Link>
        </div>
      </motion.div>
    </Container>
  );
};

export default SuccessPage;
