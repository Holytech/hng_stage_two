import { useEffect, useState } from "react";
import SideNav from "../components/Layouts/SideNav";
import CartCard from "../components/Cart/CartCard";
import { Link } from "react-router-dom";
import { addCommasToNumber } from "../Logics/Functions";

const Cart = () => {
  const [cartItem, setCartItem] = useState([]);
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

  const removeItem = (itemIdToDelete) => {
    let cartItems = JSON.parse(localStorage.getItem("carts"));
    if (cartItems) {
      cartItems = cartItems.filter((item) => item.id !== itemIdToDelete);
      localStorage.setItem("carts", JSON.stringify(cartItems));
      setCartItem(cartItems);
    }
  };

  return (
    <>
      <div className="w-full flex flex-col md:flex-row">
        <SideNav />
        <div className="w-full p-2 md:p-10 h-screen overflow-scroll">
          <div>
            <h1 className="text-[#D16306] text-3xl font-bold mb-5">MY CART</h1>
          </div>
          {cartItem && cartItem.length > 0 ? (
            <div className="flex flex-col md:flex-row gap-14">
              <div className="w-full md:w-4/6 flex flex-col gap-4 md:gap-8">
                {cartItem.map((each, index) => (
                  <CartCard item={each} key={index} removeItem={removeItem} />
                ))}
              </div>
              <div className="w-full md:w-2/6 bg-[#587657] p-5 h-fit">
                <div className="w-full flex flex-col gap-5">
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
              </div>
            </div>
          ) : (
            <>
              <div className="w-full h-fit flex flex-col gap-4">
                <img
                  src="/empty_cart.png"
                  alt="cart is empty"
                  className="mx-auto"
                />
                <h1 className="w-fit mx-auto font-bold text-[#587657] text-xl">
                  Your Cart is empty
                </h1>
                <Link
                  to="/"
                  className="bg-[#587657] text-white font-bold text-xl px-3 py-2 rounded-lg w-fit mx-auto"
                >
                  Continue Shopping
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
