import { NavLink, Link } from "react-router-dom";
//react-icons
import { BiSolidMessageCheck } from "react-icons/bi";
import { IoCodeSlash } from "react-icons/io5";
import { LiaToolsSolid } from "react-icons/lia";
import { FaAppStore } from "react-icons/fa6";
import { VscTerminalTmux } from "react-icons/vsc";
import { FaDownload } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { TiShoppingBag } from "react-icons/ti";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";

import { FaPhoneAlt } from "react-icons/fa";

function Home() {
  return (
    <div className="home relative px-[5%] w-full  flex flex-col  lg:flex-row justify-items-center lg:gap-5 xl:gap-20">
      <span className="load-span absolute top-0 left-0 z-50 inline-block w-full h-[50vh] bg-black "></span>
      <span className="load-span2 absolute bottom-0 right-0 z-50 inline-block w-full h-[50vh] bg-black "></span>

      {/* ============= HEADER ========================================== */}
      <header className="header-css">
        <nav className=" fixed bottom-5 flex z-50 left-[50%] w-[250px]  items-center justify-center gap-4 py-2 rounded-full  translate-x-[-50%] bg-[#54545434] ">
          <NavLink to="/" className="relative group">
            <span className="navLinkSpan">Home</span>
            <IoHomeOutline />
          </NavLink>

          {/* <NavLink to="/about" className="relative group">
            <span className="navLinkSpan">About</span>
            <FaRegUser />
          </NavLink> */}

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
      {/* ///////////////////////////////////////////////////////////////////////////////////////// */}
      <section className="upper-social absolute top-0 left-0 w-full h-[8vh]  bg-transparent flex justify-between items-center px-[5%]">
        <Link to="/" className="text-2xl font-extrabold font-fraunces logo">
          DevPro.
        </Link>
        <div className="flex items-center gap-2 sm:gap-5 text-white cursor-pointer ">
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
      {/* =================================================================================== */}
      <section className="px-2 home-section relative   mt-20 items-center flex flex-col gap-5 md:px-10  lg:px-5 xl:px-10 py-10 rounded-xl w-full h-auto lg:w-[35%] ">
        <div className="w-44 h-44 md:w-52 md:h-52 lg:w-48 lg:h-48 xl:w-56 xl:h-56  rounded-full outline-dashed outline-4 outline-offset-4  outline-blue-500 overflow-hidden ">
          <img
            src="./photo1.jpg"
            alt="photo.jpg"
            className="w-full mx-auto  "
          />
        </div>
        <h1 className="text-gray-100 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-2xl xl:text-3xl text-center ">
          Orifjonov Jonibek
        </h1>
        <h1 className="text-center">
          <span className="profession py-1 px-2 rounded-sm font-bold">
            Web Developer
          </span>
        </h1>

        <div className="flex items-center gap-3 sm::gap-5 text-white cursor-pointer ">
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
        {/* ==================== Contact card ========================================= */}
        <div className="contact-card rounded-lg py-6 px-4 flex gap-7 flex-col w-full md:w-[70%] lg:w-full ">
          <div className="contact-phone flex w-full pb-2">
            <div className="phone-icon w-[30%] flex justify-start items-center">
              <span className="group bg-black w-8 h-8 sm:w-9 sm:h-9 rounded-lg inline-flex justify-center items-center text-red-500">
                <FaPhoneAlt className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-all duration-150" />
              </span>
            </div>
            <div className="phone-data flex flex-col">
              <p className="text-sm text-gray-200">Phone</p>
              <p className="text-gray-100 font-semibold text-sm sm:text-md">
                +998 91 699 94 98
              </p>
            </div>
          </div>

          <div className="contact-phone flex w-full pb-2">
            <div className="phone-icon w-[30%] flex justify-start items-center">
              <span className="group bg-black w-8 h-8 sm:w-9 sm:h-9 rounded-lg inline-flex justify-center items-center text-green-500">
                <BiSolidMessageCheck className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-all duration-150" />
              </span>
            </div>
            <div className="phone-data flex flex-col">
              <p className="text-sm text-gray-200">Email</p>
              <p className="text-gray-100 font-semibold text-[12px] lg:text-[12px] xl:text-[16px]">
                jonibektanks@gmail.com
              </p>
            </div>
          </div>

          <div className="contact-phone flex w-full pb-2">
            <div className="phone-icon w-[30%] flex justify-start items-center ">
              <span className="group  bg-black w-8 h-8 sm:w-9 sm:h-9 rounded-lg inline-flex justify-center items-center text-purple-500 ">
                <FaLocationDot className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-all duration-150" />
              </span>
            </div>
            <div className="phone-data flex flex-col">
              <p className="text-sm text-gray-200">Location</p>
              <p className="text-gray-100 font-semibold text-sm sm:text-md">
                Ferghana UZB
              </p>
            </div>
          </div>
        </div>
        <div className="cv-button">
          <button className="text-white text-sm flex items-center gap-2 bg-red-500 py-3 px-8 rounded-full hover:bg-red-400 transition-all duration-200">
            <span>
              <FaDownload />
            </span>
            Download CV
          </button>
        </div>
        <div className="skill-card sm:w-[70%]   w-full h-[30vh] md:w-[70%] md:h-[30vh] lg:w-[22vw]  rounded-xl py-5 px-8 border-2 ">
          <h1 className="text-slate-300 text-xl sm:text-2xl md:text-3xl mb-4 md:mb-4 lg:mb-0 font-bold text-center">
            Skills
          </h1>
          <div className="w-full h-full grid grid-cols-4 grid-rows-3 gap-3 sm:gap-1 lg:py-4 xl:py-6 lg:px-2 xl:px-7 lg:gap-3 xl:gap-4">
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
      </section>
      {/* ================================ About section ============================================ */}
      <section className="about w-full flex flex-col gap-5 mt-[9%]">
        <div className="about-info flex flex-col md:gap-5  xl:gap-10">
          <h1 className="about-title text-3xl md:text-4xl lg:text-4xl xl:text-5xl">
            About Me <span className="about-span w-14 sm:w-[150px]"></span>
          </h1>
          <p className="about-text text-sm sm:text-md">
            I am Creative Director and Web Developer from Ferghana, Uzbekistan,
            working in web development and print media. I enjoy turning complex
            problems into simple, beautiful and intuitive designs.
          </p>

          <p className="about-text">
            My aim is to bring axross your message and identity in the most
            creative way. I created web development for some famous brand
            companies.
          </p>
        </div>
        <h1 className="card-title text-white text-2xl text-center sm:text-start md:text-3xl lg:text-xl xl:text-2xl font-semibold">
          What I do !!!
        </h1>
        <div className="cards w-full grid grid-cols-1 grid-rows-4 sm:grid-rows-2 sm:grid-cols-2 gap-5">
          <div className="about-card ui-card flex flex-col sm:flex-row gap-4 p-4 rounded-md text-center sm:text-start">
            <dic className="icon-div  w-full sm:w-16 lg:w-16 xl:w-20 ">
              <VscTerminalTmux className="text-purple-400 w-10 h-10 sm:w-8 sm:h-8 md:w-8 md:h-8 lg:w-10 xl:w-14 lg:h-10 xl:h-14 mx-auto sm:mx-0" />
            </dic>
            <div className="card-info flex flex-col gap-4  pb-8">
              <h1 className="card-title text-white text-xl md:text-2xl lg:text-xl xl:text-2xl">
                UI/UX Designer
              </h1>
              <p className="about-text text-sm sm:text-md lg:pe-5 xl:pe-10 ">
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit. consectetur
                adipisicing elit. Facilis exercitationem quam velit!
              </p>
            </div>
          </div>
          {/* ======================================================================================= */}
          <div className="about-card text-center sm:text-start ui-card flex flex-col sm:flex-row gap-4 p-4 rounded-md">
            <dic className="icon-div lg:w-16 xl:w-20 ">
              <FaAppStore className="text-yellow-500 w-10 h-10 sm:w-8 sm:h-8 md:w-8 md:h-8 lg:w-10 xl:w-14 lg:h-10 xl:h-14 mx-auto sm:mx-0" />
            </dic>
            <div className="card-info flex flex-col gap-4  pb-8">
              <h1 className="card-title text-white text-xl md:text-2xl lg:text-xl xl:text-2xl">
                App Development
              </h1>
              <p className="about-text text-sm sm:text-md lg:pe-5 xl:pe-10 ">
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit. consectetur
                adipisicing elit. Facilis exercitationem quam velit!
              </p>
            </div>
          </div>
          {/* ================================================================================== */}
          <div className="about-card text-center sm:text-start ui-card flex flex-col sm:flex-row gap-4 p-4 rounded-md">
            <dic className="icon-div lg:w-16 xl:w-20 ">
              <LiaToolsSolid className="text-pink-400  w-10 h-10 sm:w-8 sm:h-8 md:w-8 md:h-8 lg:w-10 xl:w-14 lg:h-10 xl:h-14 mx-auto sm:mx-0" />
            </dic>
            <div className="card-info flex flex-col gap-4  pb-8">
              <h1 className="card-title text-white text-xl md:text-2xl lg:text-xl xl:text-2xl">
                API development
              </h1>
              <p className="about-text text-sm sm:text-md lg:pe-5 xl:pe-10 ">
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit. consectetur
                adipisicing elit. Facilis exercitationem quam velit!
              </p>
            </div>
          </div>
          {/* ======================================================================== */}
          <div className="about-card text-center sm:text-start ui-card flex flex-col sm:flex-row gap-4 p-4 rounded-md">
            <dic className="icon-div lg:w-16 xl:w-20 ">
              <IoCodeSlash className="text-blue-500  w-10 h-10 sm:w-8 sm:h-8 md:w-8 md:h-8 lg:w-10 xl:w-14 lg:h-10 xl:h-14 mx-auto sm:mx-0" />
            </dic>
            <div className="card-info flex flex-col gap-4  pb-8">
              <h1 className="card-title text-white text-xl md:text-2xl lg:text-xl xl:text-2xl">
                Web Development
              </h1>
              <p className="about-text text-sm sm:text-md lg:pe-5 xl:pe-10 ">
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit. consectetur
                adipisicing elit. Facilis exercitationem quam velit!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
