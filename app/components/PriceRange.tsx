/** @format */

import ReactSlider from "react-slider";
interface Props {
  minPrice: number;
  maxPrice: number;
  onChange: (value: number[], index: number) => void;
  value: number[];
}

const PriceRange = ({ minPrice, maxPrice, onChange, value }: Props) => {
  return (
    <div>
      <div className='flex w-full justify-between'>
        <p>¥{value[0]}</p>
        <p>¥{value[1]}+</p>
      </div>
      <ReactSlider
        value={value}
        onChange={onChange}
        className='horizontal-slider cursor-pointer'
        min={minPrice - 3000}
        max={maxPrice}
      />
    </div>
  );
};

export default PriceRange;
