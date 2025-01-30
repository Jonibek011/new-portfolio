import { NavLink, Link } from "react-router-dom";

import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { TiShoppingBag } from "react-icons/ti";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";

//react-icons
import { FaPhoneAlt } from "react-icons/fa";

function Home() {
  return (
    <div className="home relative px-[5%] w-full overflow-hidden flex justify-items-center">
      <span className="load-span absolute top-0 left-0 z-50 inline-block w-full h-[50vh] bg-black "></span>
      <span className="load-span2 absolute bottom-0 right-0 z-50 inline-block w-full h-[50vh] bg-black "></span>

      <div className="skill-card absolute top-24 right-28 w-[22vw] h-[25vh] rounded-xl py-5 px-8 border-2 ">
        <h1 className="text-slate-300 text-2xl font-bold text-center">
          Skills
        </h1>
        <div className="w-full h-full grid grid-cols-4 grid-rows-3 py-6 px-10 gap-4">
          <img className="skill-images" src="./html.png" alt="" />
          <img className="skill-images" src="./css.png" alt="" />
          <img className="skill-images" src="./js.png" alt="" />
          <img className="skill-images" src="./bootstrap.png" alt="" />
          <img className="skill-images" src="./git.png" alt="" />
          <img className="skill-images" src="./github.png" alt="" />
          <img className="skill-images" src="./tailwind.png" alt="" />
          <img className="skill-images" src="./figma.png" alt="" />
          <img className="skill-images" src="./vite.png" alt="" />
          <img className="skill-images react-icon" src="./React.png" alt="" />
        </div>
      </div>

      <header className="header-css">
        <nav className="flex md:flex-col md:items-center gap-4  px-6 py-3 rounded-xl md:rounded-full w-[80%] justify-evenly ">
          <NavLink to="/" className="relative group">
            <span className="navLinkSpan">Home</span>
            <IoHomeOutline />
          </NavLink>

          <NavLink to="/about" className="relative group">
            <span className="navLinkSpan">About</span>
            <FaRegUser />
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

      <section className="upper-social absolute top-0 left-0 w-full h-[8vh]  bg-transparent flex justify-between items-center px-[5%]">
        <Link to="/" className="text-2xl font-extrabold font-fraunces logo">
          DevPro.
        </Link>
        <div className="flex items-center gap-5 text-white cursor-pointer ">
          <Link className="upper-links">
            <FaLinkedinIn />
          </Link>
          <Link className="upper-links">
            <FaTelegramPlane />
          </Link>
          <Link className="upper-links">
            <FaFacebookF />
          </Link>
          <Link className="upper-links">
            <FaInstagram />
          </Link>
        </div>
      </section>

      <section className="home-section relative z-0  mt-20 items-center flex flex-col gap-5 px-10 py-10 rounded-3xl">
        <img
          src="./photo1.jpg"
          alt="photo.jpg"
          className="w-52 mx-auto rounded-lg "
        />
        <h1 className="text-gray-100 font-bold text-4xl text-center ">
          Orifjonov Jonibek
        </h1>
        <h1 className="text-center">
          <span className="profession py-1 px-2 rounded-sm font-bold">
            Web Developer
          </span>
        </h1>

        <div className="flex items-center gap-5 text-white cursor-pointer ">
          <Link className="upper-links ">
            <FaLinkedinIn className="text-indigo-400" />
          </Link>
          <Link className="upper-links">
            <FaTelegramPlane className="text-sky-500" />
          </Link>
          <Link className="upper-links">
            <FaFacebookF className="text-orange-700" />
          </Link>
          <Link className="upper-links">
            <FaInstagram className="text-blue-700" />
          </Link>
        </div>

        <div className="contact-card rounded-lg py-4 px-2 flex flex-col">
          <div className="contact-phone flex w-full">
            <div className="phone-icon w-[30%] flex justify-start items-center">
              <span className="bg-black w-9 h-9 rounded-lg inline-flex justify-center items-center text-red-500">
                <FaPhoneAlt className="w-5 h-5" />
              </span>
            </div>
            <div className="phone-data flex flex-col">
              <p className="">Phone</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
