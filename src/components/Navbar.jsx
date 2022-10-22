// Icons:
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav>
      <div>
        <div>
          <AiOutlineMenu />
        </div>
        <h1>Best <span className="font-bold">Eats</span></h1>
        <div>
          <p>Delivery</p>
          <p>Pickup</p>
        </div>
      </div>

      <div>
        <AiOutlineSearch />
        <input type="text" placeholder="Search food..." />
      </div>

      <button>
        <BsFillCartFill />
        Cart
      </button>
    </nav>
  );
};

export default Navbar;
