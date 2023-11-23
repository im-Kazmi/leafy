"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className=" w-full flex justify-between px-10 items-center h-14 ">
      <Link href={"/"} className=" flex gap-2">
        <Image
          src={"/icons/leaf.png"}
          width={20}
          height={20}
          alt="Leafy"
          className=""
        />
        <h1 className=" font-bold">Leafy</h1>
      </Link>
      <div className=" flex gap-5">
        <Link href={"/"} className=" text-primary">
          Blogs
        </Link>
        <Link href={"/"} className=" text-primary">
          About
        </Link>
        <Link href={"/"} className=" text-primary">
          contact
        </Link>
      </div>

      <UserButton />
    </div>
  );
};

export default Navbar;
