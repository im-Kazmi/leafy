import Image from "next/image";
import React from "react";

interface UserProps {
  name?: string;
  imageUrl?: string;
  bio?: string;
}
const UserCard = ({ name, imageUrl, bio }: UserProps) => {
  return (
    <div className=" w-full lg:h-[300px] flex max-md:flex-col items-center p-10 gap-10 max-md:gap-4 ">
      <Image
        src={imageUrl!}
        width={200}
        height={200}
        alt={name!}
        className=" lg:w-[200px] lg:h-[200px] max-md:w-[150px] max-md:h-[150px] rounded-full my-auto"
      />
      <div className=" flex flex-col mx-auto">
        <h1 className=" lg:text-2xl  ">
          Written by <span className=" text_gradient2 font-bold">{name}</span>
        </h1>
        <p className=" text-xs mx-auto">{bio}</p>
      </div>
    </div>
  );
};

export default UserCard;
