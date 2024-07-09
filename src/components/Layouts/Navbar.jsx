import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      <div className="w-full bg-[#587657] font-oxygen lg:px-5 text-white">
        <div className="mx-auto hidden md:flex flex-row w-full lg:max-w-[1200px] py-5 px-5 lg:px-0 justify-between items-center">
          <Link to="/" className="font-bold tracking-widest text-xl">
            ZENITH
          </Link>
          <div className="flex flex-col md:flex-row gap-10 items-center font-medium text-lg w-fit uppercase">
            <Link
              to="/"
              className={`${
                pathname == "/"
                  ? "text-[#C7C7A6]"
                  : "hover:text-[#C7C7A6] transition duration-700 ease-in-out"
              }`}
            >
              Home
            </Link>
            <Link
              to="#"
              className={`hover:text-[#C7C7A6] transition duration-700 ease-in-out`}
            >
              Shop
            </Link>
            <Link
              to="#"
              className={`hover:text-[#C7C7A6] transition duration-700 ease-in-out`}
            >
              Products
            </Link>
            <Link
              to="#"
              className={`hover:text-[#C7C7A6] transition duration-700 ease-in-out`}
            >
              Blog
            </Link>
            <Link
              to="#"
              className={`hover:text-[#C7C7A6] transition duration-700 ease-in-out`}
            >
              Contact
            </Link>
          </div>
          <div className="flex items-center gap-8 text-xl">
            <IoSearchOutline className="cursor-pointer hover:text-[#C7C7A6] transition duration-700 ease-in-out" />
            <BsCart4 className="cursor-pointer hover:text-[#C7C7A6] transition duration-700 ease-in-out" />
          </div>
        </div>
        <div className="w-full md:hidden overflow-hidden px-5 py-2 fixed bg-[#587657]">
          <div className="flex flex-row items-center justify-between">
            <Link to="/" className="font-bold tracking-widest text-xl">
              ZENITH
            </Link>
            <div
              className="flex gap-8 w-fit items-center"
              style={{ fontSize: "30px" }}
            >
              <IoSearchOutline className="cursor-pointer hover:text-[#C7C7A6]" />
              <BsCart4 className="cursor-pointer hover:text-[#C7C7A6]" />
              <AiOutlineMenu
                className="cursor-pointer text-white"
                // style={{ fontSize: "40px" }}
                onClick={() => setNav(true)}
              />
            </div>
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
                <div
                  className="cursor-pointer p-0"
                  onClick={() => setNav(false)}
                >
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
                <BsCart4 className="cursor-pointer hover:text-[#C7C7A6]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
