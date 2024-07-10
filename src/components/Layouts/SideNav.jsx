import { useEffect, useState } from "react";
import { BsCart4 } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { TbLayoutSidebarLeftExpandFilled } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";

const SideNav = () => {
  const [nav, setNav] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const { pathname } = useLocation();

  useEffect(() => {
    let temp = JSON.parse(localStorage.getItem("carts"));
    temp ? setCartCount(JSON.parse(localStorage.getItem("carts")).length) : "";
  }, []);
  return (
    <>
      <div className="hidden md:flex flex-col bg-[#587657] text-white h-[100vh] md:max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 relative">
        <Link to="/" className="flex flex-col text-white px-5">
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
      <div className="w-fit h-fit p-4">
        <TbLayoutSidebarLeftExpandFilled
          className="cursor-pointer text-[#587657] text-4xl"
          onClick={() => setNav(true)}
        />
      </div>
      <div
        className={
          nav
            ? "w-full h-full z-50 fixed left-0 top-0 bg-gray-900/70 text-white md:hidden backdrop-blur"
            : ""
        }
      >
        <div
          className={
            nav
              ? "fixed w-full text-left bg-background bg-[#587657] left-0 top-0 bottom-0 text-white h-full px-5 py-10 ease-in duration-500"
              : "fixed p-10 w-full left-[-100%] z-50 top-0 duration-1000 h-full ease-in"
          }
        >
          <div className="w-full flex justify-between items-center mb-[5rem]">
            <div className="cursor-pointer p-0" onClick={() => setNav(false)}>
              <Link to="/" className="font-bold tracking-widest text-xl">
                ZENITH
              </Link>
            </div>
            <div className="cursor-pointer" onClick={() => setNav(false)}>
              <FaTimes size={30} />
            </div>
          </div>
          <div className="flex flex-col gap-8 text-white justify-between h-fit mb-[50px] uppercase">
            <Link
              to="/"
              className={`${
                pathname == "/" ? "text-[#C7C7A6]" : "hover:text-[#C7C7A6]"
              }`}
              onClick={() => setNav(false)}
            >
              Home
            </Link>
            <Link
              to="#"
              className={`hover:text-[#C7C7A6]`}
              onClick={() => setNav(false)}
            >
              Shop
            </Link>
            <Link
              to="#"
              className={`hover:text-[#C7C7A6]`}
              onClick={() => setNav(false)}
            >
              Products
            </Link>
            <Link
              to="#"
              className={`hover:text-[#C7C7A6]`}
              onClick={() => setNav(false)}
            >
              Blog
            </Link>
            <Link
              to="#"
              className={`hover:text-[#C7C7A6]`}
              onClick={() => setNav(false)}
            >
              Contact
            </Link>
          </div>
          <div className="flex gap-8">
            <IoSearchOutline className="cursor-pointer hover:text-[#C7C7A6]" />
            <Link to="/cart" className="relative" onClick={() => setNav(false)}>
              {cartCount > 0 ? (
                <span className="absolute -right-1 -top-1 z-10 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D16306] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#D16306]"></span>
                </span>
              ) : (
                ""
              )}
              <BsCart4 className="cursor-pointer relative hover:text-[#C7C7A6] transition duration-700 ease-in-out" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;
