import { FaDumbbell } from "react-icons/fa";
import { NavbarMenu } from "../../mockData/data";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";
import { motion } from "motion/react";
import { SlideLeft, SlideRight, SlideUp } from "../../Utility/Animation";
const Navbar = () => {
  const [navbarmenu, setNavbarmenu] = useState(false);
  return (
    <>
      <nav>
        <div className="container flex items-center justify-between py-8">
          {/* logo section */}
          <motion.div variants={SlideRight(0.2)} initial="hidden" animate="visible" whileHover={{ scale: 1.1 }} className="text-2xl flex items-center gap-2 font-bold uppercase">
            <FaDumbbell />
            <p>Coders</p>
            <p className="text-secondary">GYM</p>
          </motion.div>
          {/* menu section */}
          <motion.div
            variants={SlideUp(0.3)}
            initial="hidden"
            animate="visible"
            className="hidden md:block"
          >
            {
              <ul className="flex items-center gap-6 text-gray-600">
                {NavbarMenu.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="hover:text-primary inline-block py-1 px-3"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            }
          </motion.div>
          {/* icon section */}
          <motion.div variants={SlideLeft(0.3)} initial="hidden" animate="visible" className="flex items-center gap-4">
            <button
              className="text-2xl hover:bg-primary
            hover:text-white rounded-full p-2 duration-200"
            >
              <CiSearch />
            </button>
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <CiShoppingCart />
            </button>
            <button className="hover:bg-primary text-primary hover:text-white rounded-md font-semibold border-2 border-primary px-6 py-2 duration-200 hidden md:block">
              Login
            </button>
          </motion.div>
          {/* mobile hamburger icon section */}
           <div className="md:hidden"> {/* this will be hidden until it hits 768px = medium */}
            <motion.button
            variants={SlideLeft(0.2)} initial="hidden" animate="visible"
              onClick={() => setNavbarmenu(!navbarmenu)}
              className="hover:bg-primary rounded-full p-2 duration-200 hover:text-white"
            >
              <RxHamburgerMenu className="text-3xl" />
            </motion.button>
          </div>
        </div>
      </nav>

      {/* mobile hamburger Siderbar section */}
      <ResponsiveMenu navbarmenu={navbarmenu} />
    </>
  );
};

export default Navbar;
