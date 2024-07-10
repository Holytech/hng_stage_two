import { useEffect, useState } from "react";
import SideNav from "../components/Layouts/SideNav";
import CartCard from "../components/Cart/CartCard";
import { Link } from "react-router-dom";
import OrderSummary from "../components/Cart/OrderSummary";
import { FaArrowRightLong } from "react-icons/fa6";

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
      temp += each.price * each.quantity;
    });
    setTotal(temp);
    localStorage.setItem("TotalAmount", JSON.stringify(temp));
  }, [cartItem]);

  const removeItem = (itemIdToDelete) => {
    let cartItems = JSON.parse(localStorage.getItem("carts"));
    if (cartItems) {
      cartItems = cartItems.filter((item) => item.id !== itemIdToDelete);
      localStorage.setItem("carts", JSON.stringify(cartItems));
      setCartItem(cartItems);
    }
  };

  const increaseItemQuantity = (item) => {
    console.log("CLICKED");
    let cartItems = JSON.parse(localStorage.getItem("carts"));
    if (cartItems) {
      let itemToUpdate = cartItems.find((each) => each.id === item.id);

      if (itemToUpdate) {
        itemToUpdate.quantity += 1;
      }

      localStorage.setItem("carts", JSON.stringify(cartItems));
      setCartItem(cartItems);
    }
  };

  const decreaseItemQuantity = (item) => {
    console.log("CLICKED");
    let cartItems = JSON.parse(localStorage.getItem("carts"));
    if (cartItems) {
      let itemToUpdate = cartItems.find((each) => each.id === item.id);

      if (itemToUpdate) {
        itemToUpdate.quantity -= 1;
      }
      if (itemToUpdate.quantity == 0) {
        let itemIdToDelete = itemToUpdate.id;
        let newCart = cartItems.filter((item) => item.id !== itemIdToDelete);
        localStorage.setItem("carts", JSON.stringify(newCart));
        setCartItem(newCart);
      } else {
        localStorage.setItem("carts", JSON.stringify(cartItems));
        setCartItem(cartItems);
      }
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
                  <CartCard
                    item={each}
                    key={index}
                    removeItem={removeItem}
                    increaseItemQuantity={increaseItemQuantity}
                    decreaseItemQuantity={decreaseItemQuantity}
                  />
                ))}
              </div>
              <div className="w-full md:w-2/6 flex flex-col">
                <div className="w-full flex flex-col gap-8">
                  <OrderSummary total={total} />
                  <Link
                    to="#"
                    className="flex w-fit gap-4 bg-[#D16306] px-5 py-3 mx-auto items-center"
                  >
                    <span className="text-white">Checkout Items</span>
                    <FaArrowRightLong className="text-2xl" />
                  </Link>
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
