import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="bg-[#587657] w-full">
        <div className="w-full px-5 font-oxygen pt-20 md:pt-0">
          <div className="mx-auto w-full md:max-w-[1200px] flex flex-col md:flex-row pb-10 md:items-center gap-10">
            <div className="w-full md:w-1/2 flex flex-col gap-8">
              <div className="flex flex-col text-white text-2xl md:text-4xl">
                <h3>ZENITH FURNITURE</h3>
                <h3>Where Quality Meet Comfort</h3>
              </div>
              <p className="text-white">
                Discover the epitome of epitome of elegance with Zenith
                Furniture. Our curated collection blend modern aesthetics
                ensuring each piece an expression of luxury and funtionality.
              </p>
              <div className="flex gap-10 font-medium">
                <Link
                  to="#"
                  className="border-0 bg-[#D16306] hover:text-[#C7C7A6] hover:border-2 hover:border-[#C7C7A6] hover:bg-transparent text-lg py-2 px-3 text-white"
                >
                  EXPLORE
                </Link>
                <Link
                  to="#"
                  className="text-[#C7C7A6] border-2 border-[#C7C7A6] text-lg py-2 px-3"
                >
                  DISCOVERY
                </Link>
              </div>
            </div>
            <img src="/hero_bed.png" alt="" className="w-full md:w-1/2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
