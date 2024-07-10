import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import { addCommasToNumber } from "../../Logics/Functions";
const CartCard = ({
  item,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
}) => {
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
          <button
            className="text-lg"
            role="button"
            onClick={() => decreaseItemQuantity(item)}
          >
            -
          </button>
          <input
            type="text"
            className="w-[30px] md:w-[50px] h-[30px] md:h-[50px] border-2 text-md md:text-xl text-center border-[#B1AEAE] outline-none focus:outline-none p-2"
            value={item.quantity}
          />
          <button
            className="text-lg"
            role="button"
            onClick={() => increaseItemQuantity(item)}
          >
            +
          </button>
        </div>
        <p className="text-md md:text-lg font-semibold">
          &#x20A6;
          {addCommasToNumber(item.price)}
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
  increaseItemQuantity: PropTypes.func,
  decreaseItemQuantity: PropTypes.func,
};

export default CartCard;
