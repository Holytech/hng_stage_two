import PropTypes from "prop-types";

const ProductCard = ({ item }) => {
  return (
    <>
      <div className="flex flex-col gap-2 items-center bg-[#D9D9D9] rounded-lg p-4">
        <img
          src={item.imageUrl}
          alt={item.imageUrl.replace(".png", "")}
          className="w-full object-cover"
        />
        <div className="text-center">
          <p className="font-bold">{item.name}</p>
          <p className="font-bold">&#x20A6;{item.price}</p>
        </div>
        <div className="w-full flex justify-between font-medium">
          <button className="border-0 bg-[#D16306] hover:text-[#fff]  hover:bg-[#587657] text-sm py-1 px-2 text-white rounded-md">
            Add to cart
          </button>
          <button className="text-[#fff] border-0 border-[#587657] bg-[#587657] hover:text-white hover:bg-[#D16306] text-sm py-1 px-2 rounded-md">
            Details
          </button>
        </div>
      </div>
    </>
  );
};

ProductCard.propTypes = {
  item: PropTypes.object,
};

export default ProductCard;
