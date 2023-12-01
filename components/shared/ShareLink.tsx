"use client";
import React from "react";
import toast from "react-hot-toast";
import { MdLink } from "react-icons/md";
import { PiHeartFill } from "react-icons/pi";

const ShareLink = () => {
  const handleLinkCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("Copied to clipboard", { icon: "💖" });
    } catch (error) {
      toast.error("errorrr");
    }
  };
  return (
    <div className=" w-full flex min-h-12 h-12 justify-between  items-center border  lg:max-w-[800px]  rounded-md">
      <div className="text-red-500 text-2xl flex gap-3 my-auto px-5 ">
        <PiHeartFill />
        <span className="text-black text-sm dark:text-white">
          Share this Article with your Friends
        </span>
      </div>
      <span
        onClick={handleLinkCopy}
        className=" text-2xl h-full w-12 flex justify-center items-center animate-pulse cursor-pointer hover:bg-slate-200 hover:dark:bg-neutral-900  "
      >
        <MdLink />
      </span>
    </div>
  );
};

export default ShareLink;
