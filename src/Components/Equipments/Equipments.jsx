import { TbYoga } from "react-icons/tb";
import { FaDumbbell } from "react-icons/fa";
import { GiGymBag } from "react-icons/gi";
import { delay, motion } from "motion/react";
import { SlideLeft } from "../../Utility/Animation";
const Equipments = () => {
  const equipmentData = [
    {
      id: 1,
      title: "Yoga Equipments",
      Body: "It is a long established fact that a reader readable.",
      icon: <TbYoga />,
      delay: 0.3,
    },
    {
      id: 2,
      title: "Muscles Equipments",
      Body: "It is a long established fact that a reader readable.",
      icon: <GiGymBag />,
      delay: 0.6,
    },
    {
      id: 3,
      title: "Fitness Equipments",
      Body: "It is a long established fact that a reader readable.",
      icon: <FaDumbbell />,
      delay: 0.9,
    },
  ];
  return (
    <section>
      <div className="container py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-playfair">
          <div className="space-y-4 p-6">
            <h1 className="text-3xl md:text-4xl font-bold">
              What we offer for you
            </h1>
            <p className="text-gray-500">
              It is a long established fact that a reader readable.
            </p>
          </div>

            {equipmentData.map((item) => {
              return (
                <motion.div
                  key={item.id}
                  variants={SlideLeft(item.delay)}
                  initial="hidden"
                  whileInView="visible"
                  className=" space-y-4 p-6 bg-[#fbfbfb] hover:bg-white rounded-xl hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)] "
                >
                  <div className="text-3xl"> {item.icon}</div>
                  <p className="text-2xl md:text-3xl font-bold">{item.title}</p>
                  <p className="text-gray-500">{item.Body}</p>
                </motion.div>
              );
            })}

        </div>
      </div>
    </section>
  );
};

export default Equipments;
