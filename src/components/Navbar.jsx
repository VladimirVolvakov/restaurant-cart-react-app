// Icons:
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="max-w-[1440px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="rounded-full p-2 bg-black text-white">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>

      <div className="bg-gray-200 rounded-full px-2 flex items-center w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={20} />
        <input className="w-full bg-transparent p-2 focus:outline-none" type="text" placeholder="Search food..." />
      </div>

      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
        <BsFillCartFill className="mr-2" size={20} />
        Cart
      </button>
    </nav>
  );
};

export default Navbar;

