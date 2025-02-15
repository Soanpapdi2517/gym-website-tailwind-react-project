import { FaDumbbell } from "react-icons/fa";
import { NavbarMenu } from "../../mockData/data";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import {  useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [navbarmenu, setNavbarmenu] =useState(false);
  return (
    <>
      <nav>
        <div className="container flex items-center justify-between py-8">
          {/* logo section */}
          <div className="text-2xl flex items-center gap-2 font-bold uppercase">
            <FaDumbbell />
            <p>Coders</p>
            <p className="text-secondary">GYM</p>
          </div>
          {/* menu section */}
          <div className="hidden md:block">
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
          </div>
          {/* icon section */}
          <div className="flex items-center gap-4">
            <button
              className="text-2xl hover:bg-primary
            hover:text-white rounded-full p-2 duration-200"
            >
              <CiSearch />
            </button>
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <CiShoppingCart />
            </button>
            <button className="hover:bg-primary text-primary hover:text-white rounded-md font-semibold border-2 border-primary px-6 py-2 duration-200 hidden md:block">Login</button>
          </div>
          {/* mobile hamburger icon section */}
          <div className="md:hidden">
            <button onClick={() => setNavbarmenu(!navbarmenu)} className="hover:bg-primary rounded-full p-2 duration-200 hover:text-white">
            <RxHamburgerMenu className="text-3xl"/>
            </button>

          </div>
        </div>
      </nav>

      {/* mobile hamburger Siderbar section */}
      <ResponsiveMenu navbarmenu={navbarmenu} />
    </>
  );
};

export default Navbar;
