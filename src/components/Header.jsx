import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="relative bg-primary  overflow-hidden">
      {/* الصورة */}
      <img
        className="w-full h-screen object-cover"
        src={assets.header_img}
        alt="Barber shop image"
      />

      {/* النصوص فوق الصورة */}
      <div
        className="absolute inset-20 flex items-center justify-end pr-12 md:pr-24"
        style={{ top: "15%" }}
      >
        <div className="text-white text-right max-w-md">
          <p className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            FIND HANDS
          </p>

          <p className="flex justify-center text-yellow-200 text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            FOR FINE
          </p>
          <p className="text-yellow-200 text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            Haircuts
          </p>
          <p className="inset-20 flex items-center text-lg mt-4">
            Enjoy & relax in a luxury
          </p>
          <p className=" text-lg mt-0">barber shop environment</p>
          <button className=" mt-6 bg-secondary text-black px-8 py-2 rounded-lg shadow-lg">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
