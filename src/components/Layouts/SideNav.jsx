import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <>
      <div className="hidden md:flex flex-col bg-[#587657] text-white h-[100vh] md:max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 relative">
        <Link to="#" className="flex flex-col text-white px-5">
          <p className="text-3xl font-bold">ZENITH</p>
          <p className="text-2xl font-bold">FURNITURE</p>
        </Link>
        <hr className="h-px my-8 border-0 bg-[#C7C7A6]"></hr>
        <nav className="flex flex-col justify-between h-full min-w-[240px] p-2 font-sans text-lg font-normal text-gray-700">
          <div className="flex flex-col gap-2">
            <Link
              to="#"
              role="button"
              tabIndex="0"
              className="flex items-center gap-5 w-full p-3 rounded-lg text-start leading-tight transition-all outline-none font-bold bg-[#587657] text-white hover:bg-[#C7C7A6] hover:bg-opacity-80 hover:text-[#587657]"
            >
              PRODUCT
            </Link>
            <Link
              to="#"
              role="button"
              tabIndex="0"
              className="flex items-center gap-5 w-full p-3 rounded-lg text-start leading-tight transition-all outline-none font-bold bg-[#587657] text-white hover:bg-[#C7C7A6] hover:bg-opacity-80 hover:text-[#587657]"
            >
              FEATURED
            </Link>
            <Link
              to="#"
              role="button"
              tabIndex="0"
              className="flex items-center gap-5 w-full p-3 rounded-lg text-start leading-tight transition-all outline-none font-bold bg-[#587657] text-white hover:bg-[#C7C7A6] hover:bg-opacity-80 hover:text-[#587657]"
            >
              CART
            </Link>
            <Link
              to="#"
              role="button"
              tabIndex="0"
              className="flex items-center gap-5 w-full p-3 rounded-lg text-start leading-tight transition-all outline-none font-bold bg-[#587657] text-white hover:bg-[#C7C7A6] hover:bg-opacity-80 hover:text-[#587657]"
            >
              CHECK OUT
            </Link>
            <Link
              to="#"
              role="button"
              tabIndex="0"
              className="flex items-center gap-5 w-full p-3 rounded-lg text-start leading-tight transition-all outline-none font-bold bg-[#587657] text-white hover:bg-[#C7C7A6] hover:bg-opacity-80 hover:text-[#587657]"
            >
              MY PROFILE
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default SideNav;
