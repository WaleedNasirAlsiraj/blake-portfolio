"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import Lenis from "lenis";
import React, { useEffect, useRef } from "react";

const WelcomeTitle = ({ title, scrollYProgress }) => {
  const titleArr = title.split("");
  // const ref = useRef();

  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start start", "end start"],
  // });

  useEffect(() => {
    scrollYProgress.on("change", (e) => console.log(e));
  }, []);

  const moveSpeed = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const negitiveMoveSpeed = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const rotateB = useTransform(scrollYProgress, [0, 1], [20, 65]);
  const rotateLK = useTransform(scrollYProgress, [0, 1], [-15, -55]);
  const rotateA = useTransform(scrollYProgress, [0, 1], [25, 70]);
  const rotateE = useTransform(scrollYProgress, [0, 1], [10, 55]);

  const transformStyles = (index) => {
    switch (index) {
      case 0:
        return {
          top: "100px",
          x: moveSpeed,
          rotate: rotateB,
        };
      case 1:
        return {
          top: "130px",
          y: moveSpeed,
          rotate: rotateLK,
        };
      case 2:
        return {
          top: "70px",
          x: negitiveMoveSpeed,
          rotate: rotateA,
        };
      case 3:
        return {
          top: "140px",
          y: negitiveMoveSpeed,
          rotate: rotateLK,
        };
      case 4:
        return {
          top: "90px",
          y: moveSpeed,
          rotate: rotateE,
        };
      case 5:
        return {
          top: "130px",
          y: moveSpeed,
          rotate: rotateLK,
        };
      default:
        return {};
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      // ref={ref}
      className="text-center  w-full h-full"
    >
      <motion.div className="flex relative flex-row justify-center">
        {titleArr.map((char, index) => {
          const styles = transformStyles(index);
          return (
            <div
              key={index}
              className="w-[100px]  md:w-[170px]  text-center flex flex-row justify-center h-fit"
            >
              <motion.span
                style={styles}
                transition={{ type: "smooth", ease: "easeInOut" }}
                className="absolute font-black text-[5rem] md:text-[15rem]"
              >
                {char}
              </motion.span>
            </div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default WelcomeTitle;
