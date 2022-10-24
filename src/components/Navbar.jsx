// Hook:
import { useState } from "react";
// Icons:
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

const Navbar = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => setIsBurgerMenuOpen(!isBurgerMenuOpen);

  return (
    <section className="max-w-[1440px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        {!isBurgerMenuOpen && (
          <div className="cursor-pointer">
            <AiOutlineMenu size={30} onClick={toggleBurgerMenu} />
          </div>
        )}
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
        <input
          className="w-full bg-transparent p-2 focus:outline-none"
          type="text"
          placeholder="Search food..."
        />
      </div>

      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
        <BsFillCartFill className="mr-2" size={20} />
        Cart
      </button>

      {/* Mobile menu: */}
      {isBurgerMenuOpen && (
        <>
          <div className="fixed top-0 left-0 h-screen w-full bg-black/80 z-10"></div>
          <div className="fixed top-0 left-0 h-screen w-[300px] bg-white z-10">
            <AiOutlineClose
              size={30}
              className="absolute top-4 right-4 cursor-pointer"
              onClick={toggleBurgerMenu}
            />
            <h2 className="text-2xl p-4">
              Best <span className="font-bold">Eats</span>
            </h2>
            <nav>
              <ul className="flex flex-col p-4 text-gray-800">
                <li className="text-xl py-4 flex items-center">
                  <TbTruckDelivery className="mr-4" size={25} /> Orders
                </li>
                <li className="text-xl py-4 flex items-center">
                  <MdFavorite className="mr-4" size={25} /> Favorites
                </li>
                <li className="text-xl py-4 flex items-center">
                  <FaWallet className="mr-4" size={25} /> Wallet
                </li>
                <li className="text-xl py-4 flex items-center">
                  <MdHelp className="mr-4" size={25} /> Help
                </li>
                <li className="text-xl py-4 flex items-center">
                  <AiFillTag className="mr-4" size={25} /> Promotions
                </li>
                <li className="text-xl py-4 flex items-center">
                  <BsFillSaveFill className="mr-4" size={25} /> Best Ones
                </li>
                <li className="text-xl py-4 flex items-center">
                  <FaUserFriends className="mr-4" size={25} /> Invite Friends
                </li>
              </ul>
            </nav>
          </div>
        </>
      )}
    </section>
  );
};

export default Navbar;
