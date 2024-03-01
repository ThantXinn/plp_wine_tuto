/** @format */

import { CategoryType } from "@/type/categoryType";

interface Props {
  categories: CategoryType;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className: string;
}
const Category = ({ categories, onClick, className }: Props) => {
  return (
    <div>
      <button
        onClick={onClick}
        value={categories.title}
        className={`rounded-full flex items-center justify-center p-3 ${className} w-32 h-9 hover:scale-95 transition-transform`}>
        {categories.title}
      </button>
    </div>
  );
};

export default Category;
