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
        <nav className=" fixed bottom-5 flex z-50 left-[50%] w-[250px]  items-center justify-center gap-4 py-2 rounded-full  translate-x-[-50%] bg-[#54545434] ">
          <NavLink to="/" className="relative group">
            <span className="navLinkSpan">Home</span>
            <IoHomeOutline />
          </NavLink>

          <NavLink to="/portfolio" className="relative group">
            <span className="navLinkSpan">Portfolio</span>
            <TiShoppingBag className="text-2xl" />
          </NavLink>

          <NavLink to="/contact" className="relative group">
            <span className="navLinkSpan">Contact</span>
            <MdOutlinePermContactCalendar className="text-2xl" />
          </NavLink>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
