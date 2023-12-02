import Image from "next/image";
import React from "react";

interface UserProps {
  name?: string;
  imageUrl?: string;
  bio?: string;
}
const UserCard = ({ name, imageUrl, bio }: UserProps) => {
  return (
    <div className=" w-full lg:h-[300px] flex max-md:flex-col items-center p-10 gap-10 max-md:gap-4 rounded-md bg-white/70 dark:bg-neutral-950 ">
      <Image
        src={imageUrl!}
        width={200}
        height={200}
        alt={name!}
        className=" lg:w-[200px] lg:h-[200px] max-md:w-[150px] max-md:h-[150px] rounded-full my-auto"
      />
      <div className=" flex flex-col mx-auto w-full">
        <h1 className=" lg:text-2xl max-md:mx-auto  ">
          Written by <span className=" text_gradient2 font-bold ">{name}</span>
        </h1>
        <p className=" text-xs mx-auto max-md:mx-auto max-md:text-center">
          {bio}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
