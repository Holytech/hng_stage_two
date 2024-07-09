import { useEffect, useState } from "react";
import { products } from "../../data/data";
import ProductCard from "./ProductCard";
const ProductsGrid = () => {
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
              <ProductCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsGrid;
