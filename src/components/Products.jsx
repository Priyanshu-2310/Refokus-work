import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

const Products = () => {
  var products = [
    {
      title: "arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: true,
    },
    {
      title: "YIR 2022",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "Yahooo",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: true,
    },
  ];
  // console.log(products);
  const [pos, setPos] = useState(0);

  const mover = (val) => {
    setPos(val * 23);
  };

  return (
    <div className="mt-20 relative">
      {products.map((items, index) => {
        return <Product key={index} val={items} mover={mover} count={index} />;
      })}
      <div className="absolute top-0  w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window w-[32rem] overflow-hidden h-[23rem] rounded-lg absolute left-[43%] bg-white"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full  bg-sky-100"
          >
            <video autoPlay muted loop src="/1.webm"></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            className="w-full h-full rounded-lg overflow-hidden"
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          ><video className="w-full h-full object-cover" autoPlay muted loop src="/2.mp4"></video></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            className="w-full h-full  bg-sky-400"
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          ><video autoPlay muted loop src="/3.mp4"></video></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            className="w-full h-full  bg-sky-500"
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          ><video autoPlay muted loop src="/4.mp4"></video></motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
