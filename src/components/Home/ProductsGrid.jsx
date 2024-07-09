import { products } from "../../data/data";
import ProductCard from "./ProductCard";
const ProductsGrid = () => {
  return (
    <>
      <div className="w-full bg-white px-5">
        <div className="mx-auto w-full md:max-w-[1200px] flex flex-col py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-24 gap-y-10">
            {products.map((item, index) => (
              <ProductCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsGrid;
