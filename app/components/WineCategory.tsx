/** @format */

import { WineType } from "@/type/wineType";

interface Props {
  winetypes: WineType;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className: string;
}
const WineCategory = ({ winetypes, onClick, className }: Props) => {
  return (
    <div>
      <button
        onClick={onClick}
        value={winetypes.title}
        className={`rounded-full flex items-center justify-center p-3 ${className} w-32 h-9 hover:scale-95 transition-transform`}>
        {winetypes.title}
      </button>
    </div>
  );
};
export default WineCategory;
