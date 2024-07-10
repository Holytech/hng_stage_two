import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="flex flex-col items-center gap-5">
          <div className="text-center">
            <h1 className="text-8xl font-extrabold text-[#587657]">404</h1>
            <p>Page Not Found</p>
          </div>
          <Link to="/" className="px-5 py-3 bg-[#587657] text-white rounded-3xl">
            GO TO HOMEPAGE
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
