import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-[#587657] px-5 py-10">
        <div className="w-full md:max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between gap-y-5">
            <Link to="#" className="text-white text-xl">About Us</Link>
            <Link to="#" className="text-white text-xl">Contact</Link>
            <Link to="#" className="text-white text-xl">Blog</Link>
            <Link to="#" className="text-white text-xl">Help and Information</Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
