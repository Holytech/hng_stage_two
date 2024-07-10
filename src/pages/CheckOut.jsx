import { useEffect, useState } from "react";
import OrderSummary from "../components/Cart/OrderSummary";
import SideNav from "../components/Layouts/SideNav";

const CheckOut = () => {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let temp = JSON.parse(localStorage.getItem("TotalAmount"));
    if (temp) {
      setTotal(temp);
    }
  }, []);
  return (
    <>
      <div className="w-full flex flex-col md:flex-row">
        <SideNav />
        <div className="w-full p-2 md:p-10 h-screen overflow-scroll">
          <div>
            <h1 className="text-[#D16306] text-3xl font-bold mb-5">CHECKOUT</h1>
          </div>

          <div className="flex flex-col md:flex-row gap-14">
            <div className="w-full md:w-4/6 flex flex-col gap-4 md:gap-8"></div>
            <div className="w-full md:w-2/6 flex flex-col">
              <OrderSummary total={total} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
