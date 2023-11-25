"use client";

import { useThemeContext } from "@/context/ThemeContext";
import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoMdSunny } from "react-icons/io";

const ThemeSwitch = () => {
  const { theme, handleThemeChange }: any = useThemeContext();

  return (
    <div className=" w-fit p-2 flex bg-neutral-100 rounded-full dark:bg-neutral-800">
      <span
        onClick={handleThemeChange}
        className=" m-auto cursor-pointer text-yellow-500"
      >
        {theme === "dark" ? <IoMdSunny /> : <BsFillMoonStarsFill />}
      </span>
    </div>
  );
};

export default ThemeSwitch;
