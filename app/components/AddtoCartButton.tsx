/** @format */

interface Props {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
  icon?: JSX.Element;
}

const AddToCartButton = ({ onClick, className, icon }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`${className}`}>
      <span className={`${icon ? "max-lg:hidden" : "flex"} text-sm`}>
        Add to Cart
      </span>
      <>{icon}</>
    </button>
  );
};
export default AddToCartButton;
