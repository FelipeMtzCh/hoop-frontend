import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex w-full h-[4.5rem] px-0 py-8 flex-col justify-center items-center border-b-[1px] border-black">
      <div className="flex justify-center items-center px-16 self-stretch">
        <div className="flex gap-x-8 flex-nav items-center justify-start h-full">
          <p className="text-base">Discover</p>
          <Link to="/shop">
            <p className="text-base">Shop</p>
          </Link>
          <p className="text-base">Explore</p>
        </div>

        <Link to="/">
          <span className="mx-16 font-bold text-xl">Logo</span>
        </Link>

        <div className="flex items-center justify-end flex-nav">
          <button className="bg-black text-white rounded-sm flex justify-center items-center px-5 py-2 gap-2">
            <span className="text-base">Menu</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
