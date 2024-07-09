import { useEffect, useState } from "react";
import SideNav from "../components/Layouts/SideNav";
import CartCard from "../components/Cart/CartCard";

const Cart = () => {
  const [cartItem, setCartItem] = useState(
    JSON.parse(localStorage.getItem("carts"))
  );
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("carts"));
    if (cart) {
      setCartItem(cart);
    }
  }, []);

  useEffect(() => {
    let temp = 0;
    cartItem.map((each) => {
      temp += each.price;
    });
    setTotal(temp);
  }, [cartItem]);

  return (
    <>
      <div className="w-full flex">
        <SideNav />
        <div className="w-full p-2 md:p-10">
          <div>
            <h1 className="text-[#D16306] text-3xl font-bold mb-5">MY CART</h1>
          </div>
          {cartItem ? (
            <div className="flex flex-col md:flex-row gap-14">
              <div className="w-full md:w-4/6 flex flex-col gap-4 md:gap-8">
                {cartItem.map((each, index) => (
                  <CartCard item={each} key={index} />
                ))}
              </div>
              <div className="w-full md:w-2/6 bg-[#587657] p-5 h-fit">
                <div className="w-full flex flex-col gap-5">
                  <h1 className="text-white font-bold text-2xl">Summary</h1>
                  <p className="text-white text-xl">
                    Order Total: &#x20A6;
                    {total.toString().substring(0, 3) +
                      "," +
                      total.toString().substring(3)}
                  </p>
                  <p className="text-white text-xl">
                    Shipping Fee:{" "}
                    <span className="py-1 px-3 bg-white text-black font-semibold">
                      Free
                    </span>
                  </p>
                  <p className="text-white text-xl">
                    Shipping: &#x20A6;
                    {total.toString().substring(0, 3) +
                      "," +
                      total.toString().substring(3)}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
