"use client";
import { homeNavs } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { RiUser3Line } from "react-icons/ri";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className=" w-full flex flex-col  gap-3 justify-center px-10 items-center h-14 mt-5">
      <Link href={"/"} className=" flex gap-2">
        <h1 className=" font-bold uppercase text-2xl ">Leafy</h1>
      </Link>
      <div className="flex flex-col w-full justify-center items-center">
        <div className=" flex gap-5 mb-1 max-sm:hidden">
          {homeNavs.map((item) => {
            const isActive = pathname.includes(item.route);
            return (
              <Link
                key={item.id}
                href={item.route}
                className={` text-primary text-sm ${
                  isActive && "text-green-500"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          <div className=" flex gap-3"></div>
          <span className=" font-bold cursor-pointer">
            <CiSearch />
          </span>

          <SignedIn>
            <div>
              <UserButton />
            </div>
          </SignedIn>
          <SignedOut>
            <div className="flex cursor-pointer">
              <RiUser3Line /> <span className=" text-sm ml-1">Login</span>
            </div>
          </SignedOut>
        </div>
        <hr className=" w-full" />
      </div>
    </div>
  );
};

export default Navbar;
