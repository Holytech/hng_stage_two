import PropTypes from "prop-types";
import { addCommasToNumber } from "../../Logics/Functions";

const OrderSummary = ({ total }) => {
  return (
    <>
      <div className="w-full">
        <div className="w-full flex flex-col bg-[#587657] p-5 h-fit gap-5">
          <h1 className="text-white font-bold text-2xl">Summary</h1>
          <p className="text-white text-xl">
            Order Total: &#x20A6;
            {total != 0 ? addCommasToNumber(total) : 0}
          </p>
          <p className="text-white text-xl">
            Shipping Fee:{" "}
            <span className="py-1 px-3 bg-white text-black font-semibold">
              Free
            </span>
          </p>
          <p className="text-white text-xl">
            Shipping: &#x20A6;
            {total != 0 ? addCommasToNumber(total) : 0}
          </p>
        </div>
        <div className="bg-[#C7C7A6] w-full h-fit p-5">
          <p className="font-semibold text-xl">
            Subtotal: &#x20A6;
            {total != 0 ? addCommasToNumber(total) : 0}
          </p>
        </div>
      </div>
    </>
  );
};

OrderSummary.propTypes = {
  total: PropTypes.number,
};

export default OrderSummary;
