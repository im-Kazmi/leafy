import Image from "next/image";
import React from "react";

const FeaturePost = () => {
  return <div className=" w-full p-10 rounded-lg flex gap-5">
    <Image src={"/"} width={400} height={400} alt="" className=" rounded-lg " />
  </div>;
};

export default FeaturePost;
