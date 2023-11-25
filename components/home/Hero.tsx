/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className=" w-full h-full flex justify-center items-center py-28 max-h-[500px]">
      <div className=" flex flex-col gap-3  text-center  m-auto  ">
        <h1 className=" text-5xl font-extrabold text-neutral-700 dark:text-neutral-100 selection:bg-neutral-200 selection:bg-opacity-50">
          <span className="text-gradient3 ">Leafy :</span> <br /> Your Source
          for <br />
          <span className=" text_gradient relative">
            {" "}
            Sustainable{" "}
            <img
              src="/assets/images/line.svg"
              alt=""
              className=" absolute  -left-6 right-40 -top-3  w-full   "
            />{" "}
          </span>
          <span className="text-gradient2 ">Knowledge</span>
        </h1>
        <p className=" text-xs text-neutral-500 mt-2 dark:text-neutral-100 text-clip mx-auto">
          Our mission: Unleashing green wisdom. Empowering action. For a
          <span className=" text-gradient2 "> sustainable </span> tomorrow.
        </p>
        <Button className=" bg-gradient-to-r mx-auto  w-fit from-green-200 text-black to-yellow-200 ">
          Explore
        </Button>
      </div>
    </div>
  );
};

export default Hero;
