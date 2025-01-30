import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";

//react icons
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { TiShoppingBag } from "react-icons/ti";
import { MdOutlinePermContactCalendar } from "react-icons/md";

function Navbar() {
  return (
    <>
      {/* <header2 className="fixed top-0 left-0 w-full  h-[10vh] border z-50 flex items-center custom-container">
        <ul className="flex gap-10 w-[70%] justify-end  text-white font-thin">
          <Link
            to="/"
            className="hover:text-[orange] transition-all duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-[orange] transition-all duration-300"
          >
            About
          </Link>
          <Link
            to="/portfolio"
            className="hover:text-[orange] transition-all duration-300"
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            className="hover:text-[orange] transition-all duration-300"
          >
            Contact
          </Link>
        </ul>
      </header2> */}
      <header className="header-css">
        <nav className="flex md:flex-col md:items-center gap-4  px-6 py-3 rounded-xl md:rounded-full w-[80%] justify-evenly ">
          <NavLink to="/">
            <IoHomeOutline />
          </NavLink>

          <NavLink to="/about">
            <FaRegUser />
          </NavLink>

          <NavLink to="/portfolio">
            <TiShoppingBag className="text-2xl" />
          </NavLink>

          <NavLink to="/contact">
            <MdOutlinePermContactCalendar className="text-2xl" />
          </NavLink>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
