/** @format */
import { FcNext } from "react-icons/fc";

const RightArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className={`max-lg:w-10 max-lg:h-10 w-14 h-14 rounded-full text-white bg-slate-400 bg-opacity-40 hover:bg-opacity-100 duration-300 cursor-pointer flex items-center justify-center z-10 absolute right-2 lg:top-[140px] max-lg:top-[35%]`}>
      <FcNext />
    </div>
  );
};

export default RightArrow;
