import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className=" w-full flex gap-2  h-10 rounded-md  bg-white px-3 ">
      <span className=" my-auto font-bold text-lg">
        <CiSearch />
      </span>
      <input
        type="text"
        placeholder="Search Posts..."
        className=" w-full h-full bg-transparent outline-none border-none "
      />
    </div>
  );
};

export default SearchBar;
