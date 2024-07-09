import { useEffect, useState } from "react";
import Hero from "../components/Home/Hero";
import ProductsGrid from "../components/Home/ProductsGrid";
import Footer from "../components/Layouts/Footer";
import Navbar from "../components/Layouts/Navbar";

const Home = () => {
  const [addModal, setAddModal] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const updateCart = (newItem) => {
    const cartItems = JSON.parse(localStorage.getItem("carts"));
    if (cartItems) {
      let existingItem = cartItems.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        newItem.quantity = 1;
        cartItems.push(newItem);
      }
      localStorage.setItem("carts", JSON.stringify(cartItems));
      promptModal();
    } else {
      newItem.quantity = 1;
      const cartItem = [newItem];
      localStorage.setItem("carts", JSON.stringify(cartItem));
      promptModal();
    }
  };

  const promptModal = () => {
    setAddModal(true);
    setCartCount(JSON.parse(localStorage.getItem("carts")).length);
    setTimeout(() => {
      setAddModal(false);
    }, 2000);
  };

  useEffect(() => {
    let temp = JSON.parse(localStorage.getItem("carts"));
    temp ? setCartCount(JSON.parse(localStorage.getItem("carts")).length) : "";
  }, []);
  return (
    <>
      <Navbar cartCount={cartCount} />
      <Hero />
      <ProductsGrid addModal={addModal} updateCart={updateCart} />
      <Footer />
    </>
  );
};

export default Home;
