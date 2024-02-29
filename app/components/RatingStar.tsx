/** @format */

import { FaStar } from "react-icons/fa6";
interface Props {
  rating: number;
}
const RatingStar = ({ rating }: Props) => {
  return (
    <div className='relative flex flex-col items-center justify-center text-sm max-lg:text-xs'>
      <div
        key={"star"}
        className='flex gap-[2px]'>
        {[...Array(Math.floor(rating))].map((star, index) => {
          return (
            <div key={index}>
              <FaStar />
            </div>
          );
        })}
      </div>
      <div className='flex items-center gap-1 relative top-1'>
        <p>{Math.round(rating) * 100}</p>
        <p>ratings</p>
      </div>
    </div>
  );
};
export default RatingStar;
