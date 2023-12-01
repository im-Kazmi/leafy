import Image from "next/image";
import React from "react";

interface UserProps {
  name?: string;
  imageUrl?: string;
  bio?: string;
}
const UserCard = ({ name, imageUrl, bio }: UserProps) => {
  return (
    <div className=" w-full h-[300px] flex items-center p-10 gap-10 ">
      <Image
        src={imageUrl!}
        width={200}
        height={200}
        alt={name!}
        className=" rounded-full my-auto"
      />
      <div className=" flex flex-col">
        <h1 className=" text-2xl ">
          Written by <span className=" text_gradient2 font-bold">{name}</span>
        </h1>
        <p>{}</p>
      </div>
    </div>
  );
};

export default UserCard;
