import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const Work = () => {
  const [image, setImage] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "45%",
      left: "55%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "65%",
      left: "55%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    showimage(Math.floor(latest * 100));
  });

  function imageshow(arr){
    setImage(prev =>(
      prev.map((item, index) => (
        arr.indexOf(index) === -1 ? (
          {...item, isActive: false}
        )
        :
        ({...item, isActive: true})
      ))
    ))
  }

  function showimage(scrollval) {
    switch (scrollval) {
      case 0:
        imageshow([])
        break;
      case 1:
        imageshow([0])
        break;
      case 2:
        imageshow([0,1])
        break;
      case 3:
        imageshow([0,1,2])
        break;
      case 4:
        imageshow([0,1,2,3])
        break;
      case 5:
          imageshow([0,1,2,3,5])
          break;
      case 6:
        imageshow([0,1,2,3,5,6])


        
        
    }
  }

  return (
    <div className="w-full">
      <div className="relative max-w-screen-lg mx-auto text-center">
        <h1 className="text-[30vw] leading-none font-medium tracking-tighter select-none">
          work
        </h1>
        <div className="absolute top-0 w-full h-full">
          {image.map(
            (elem, index) =>
              elem.isActive && (
                <img
                  key={index}
                  className="absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]"
                  style={{ top: elem.top, left: elem.left }}
                  src={elem.url}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
