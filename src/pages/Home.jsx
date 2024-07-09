import Hero from "../components/Home/Hero";
import ProductsGrid from "../components/Home/ProductsGrid";
import Footer from "../components/Layouts/Footer";
import Navbar from "../components/Layouts/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductsGrid />
      <Footer />
    </>
  );
};

export default Home;
