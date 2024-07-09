import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
const CartCard = ({ item, removeItem }) => {
  return (
    <>
      <div className="w-full flex items-center border-2 border-[#B1AEAE] p-3 md:p-5 justify-between">
        <div className="bg-[#D9D9D9] rounded-md md:rounded-xl p-1 md:p-2">
          <img
            src={item.imageUrl}
            alt={item.imageUrl.replace(".png", "")}
            className="h-[50px] md:h-[100px]"
          />
        </div>
        <p className="text-md md:text-2xl">{item.name}</p>
        <div className="flex gap-2">
          <button className="text-lg" role="button">
            -
          </button>
          <input
            type="text"
            className="w-[30px] md:w-[50px] h-[30px] md:h-[50px] border-2 text-md md:text-xl text-center border-[#B1AEAE] outline-none focus:outline-none p-2"
            value={item.quantity}
          />
          <button className="text-lg" role="button">
            +
          </button>
        </div>
        <p className="text-md md:text-lg font-semibold">
          &#x20A6;
          {item.price.toString().substring(0, 3) +
            "," +
            item.price.toString().substring(3)}
        </p>
        <FaTimes
          className="cursor-pointer"
          onClick={() => removeItem(item.id)}
        />
      </div>
    </>
  );
};

CartCard.propTypes = {
  item: PropTypes.object,
  removeItem: PropTypes.func,
};

export default CartCard;
