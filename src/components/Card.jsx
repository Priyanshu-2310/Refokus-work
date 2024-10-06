import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";

const Card = ({ width, start, para , hover="false"}) => {
  return (
    <motion.div whileHover={{backgroundColor: hover==="true" && "#7443ff", padding: "25px"}} className={`bg-zinc-800 p-5 rounded-xl ${width} min-h-[30rem] flex flex-col justify-between`}>
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>One Heading</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium mt-5">Whatever Heading</h1>
      </div>
      <div className="down w-full">
        {start === true ? (
          <>
            <h1 className="text-6xl font-semibold tracking-tight leading-none">
              start a project
            </h1>
            <button className="rounded-full py-1 mt-5 px-3 border-[1px] border-zinc-50">
              Contact Us
            </button>
          </>
        ) : null}
        {para && (
          <p className="text-sm text-zinc-500 font-medium">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
