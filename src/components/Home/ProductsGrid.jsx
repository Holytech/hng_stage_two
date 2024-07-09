import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { products } from "../../data/data";
import ProductCard from "./ProductCard";
const ProductsGrid = ({ addModal, updateCart }) => {
  const [filter, setFilter] = useState("products");
  const [filteredData, setFilteredData] = useState(products);

  useEffect(() => {
    filter == "products"
      ? setFilteredData(products)
      : setFilteredData(
          products.filter((item) => {
            return item.tag.indexOf(filter) > -1;
          })
        );
  }, [filter]);

  return (
    <>
      {addModal ? (
        <div
          className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md fixed top-14 md:top-32 right-2 md:right-100"
          role="alert"
        >
          <div className="flex">
            <div className="py-1">
              <svg
                className="fill-current h-6 w-6 text-teal-500 mr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
              </svg>
            </div>
            <div>
              <p className="font-bold">Item succesfully added to cart</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="w-full bg-white px-5">
        <div className="mx-auto w-full md:max-w-[1200px] flex flex-col py-10">
          <div className="flex items-center gap-2 md:gap-6 mb-5 w-fit mx-auto text-sm md:text-lg">
            <button
              className={`${
                filter == "products"
                  ? "underline underline-offset-5 text-[#D16306] px-2"
                  : ""
              } font-bold`}
              onClick={() => setFilter("products")}
            >
              PRODUCTS
            </button>
            <button
              className={`${
                filter == "top seller"
                  ? "underline underline-offset-5 text-[#D16306] px-2"
                  : ""
              } font-bold`}
              onClick={() => setFilter("top seller")}
            >
              TOP SELLER
            </button>
            <button
              className={`${
                filter == "featured"
                  ? "underline underline-offset-5 text-[#D16306] px-2"
                  : ""
              } font-bold`}
              onClick={() => setFilter("featured")}
            >
              FEATURED
            </button>
            <button
              className={`${
                filter == "new arrival"
                  ? "underline underline-offset-5 text-[#D16306] px-2"
                  : ""
              } font-bold`}
              onClick={() => setFilter("new arrival")}
            >
              NEW ARRIVAL
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-24 gap-y-10">
            {filteredData.map((item, index) => (
              <ProductCard key={index} item={item} updateCart={updateCart} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

ProductsGrid.propTypes = {
  addModal: PropTypes.bool,
  updateCart: PropTypes.func,
};

export default ProductsGrid;
