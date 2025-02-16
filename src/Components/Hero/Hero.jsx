import { FaPlay } from "react-icons/fa";
import dumbbells from "../../assets/dumbbells.png";
import { SlideRight } from "../../Utility/Animation";
import { motion } from "motion/react";
const Hero = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
        {/* details section */}
        <div className="flex flex-col justify-center py-14 md:py-0 font-playfair">
          <div className="text-center md:text-left space-y-6">
            <motion.h1
              variants={SlideRight(0.6)}
              initial="hidden"
              animate="visible"
              className=" leading-relaxed text-5xl font-bold lg:text-6xl xl-leading-normal"
            >
              Gym Gives You the perfect{" "}
              <span className="text-primary">Strength</span>
            </motion.h1>
            <motion.p variants={SlideRight(1.2)} initial="hidden" animate="visible" className="text-gray-600 xl:max-w-[500px]">
              It is a long established fact that a reader will be by readable
              content of a page when are the best product.
            </motion.p>
            {/* button sectoion */}
            <motion.div variants={SlideRight(1.6)} initial="hidden" animate="visible" className=" flex justify-center items-center md:justify-start gap-8 mt-4">
              <button className="primary-btn flex items-center gap-2">
                Order Now
              </button>
              <button className="flex items-center gap-2 mt-4 justify-center">
                <FaPlay /> Watch Now
              </button>
            </motion.div>
          </div>
        </div>
        {/* image section */}
        <div className="flex flex-col justify-center items-center py-14 md:py-0">
          <motion.img
          initial={{opacity:0, rotate: 30, x: 150}}
          animate={{opacity:1, rotate: 0, x: 50}}
          transition={{duration:1}}
            src={dumbbells}
            alt=""
            className="w-[400px] md:w-[550px] xl:w-[700px] drop-shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
