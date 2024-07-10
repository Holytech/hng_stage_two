import PropTypes from "prop-types";
import { addCommasToNumber } from "../../Logics/Functions";

const ProductCard = ({ item, updateCart }) => {
  return (
    <>
      <div className="flex flex-col gap-3 items-center bg-[#D9D9D9] rounded-lg p-4">
        <img
          src={item.imageUrl}
          alt={item.imageUrl.replace(".png", "")}
          className="w-full object-cover"
        />
        <div className="text-center text-2xl md:text-lg">
          <p className="font-bold">{item.name}</p>
          <p className="font-bold">&#x20A6;{addCommasToNumber(item.price)}</p>
        </div>
        <div className="w-full flex justify-between font-medium">
          <button
            className="border-0 bg-[#D16306] hover:text-[#fff]  hover:bg-[#587657] text-xl md:text-sm py-1 px-2 text-white rounded-md"
            onClick={() => updateCart(item)}
          >
            Add to cart
          </button>
          <button className="text-[#fff] border-0 border-[#587657] bg-[#587657] hover:text-white hover:bg-[#D16306] text-xl md:text-sm py-1 px-2 rounded-md">
            Details
          </button>
        </div>
      </div>
    </>
  );
};

ProductCard.propTypes = {
  item: PropTypes.object,
  updateCart: PropTypes.func,
};

export default ProductCard;
