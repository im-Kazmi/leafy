"use client";
import { useRouter } from "next/navigation";
import React, { MouseEventHandler } from "react";
import { GoArrowLeft } from "react-icons/go";

const ArrowLeft = () => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <div
      onClick={handleClick}
      className="text-2xl cursor-pointer hover:animate-pulse"
    >
      <GoArrowLeft />
    </div>
  );
};

export default ArrowLeft;
