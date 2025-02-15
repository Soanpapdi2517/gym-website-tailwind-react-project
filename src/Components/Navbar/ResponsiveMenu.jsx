import { motion, AnimatePresence } from "motion/react";
import { NavbarMenu } from "../../mockData/data";
const ResponsiveMenu = ({ navbarmenu }) => {
  return (
    <AnimatePresence mode="wait">
      {navbarmenu && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0, y: -100 }}
          className=" absolute top-20 left-0 w-full h-screen z-20 "
        >
          <div className="text-xl font-bold uppercase bg-primary text-white py-10 m-10 rounded-2xl">
            <ul className="flex flex-col justify-center gap-4 items-center">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <a href={item.link} className="hover:bg-white hover:text-primary px-4 rounded-xl duration-150 hover:scale-200">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
