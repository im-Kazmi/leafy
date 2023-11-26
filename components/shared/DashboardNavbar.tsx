"use client";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { RiUser3Line } from "react-icons/ri";
import { Button } from "../ui/button";

import ThemeSwitch from "./ThemeSwitch";

const DashboardNavbar = () => {
  return (
    <div
      className=" flex w-full justify-end  h-14 
     bg-neutral-100 text-black dark:text-white dark:bg-slate-900"
    >
      <div className=" flex gap-4 my-auto px-5">
        <span className=" my-auto font-bold text-2xl cursor-pointer text-black dark:text-white">
          <CiSearch />
        </span>

        <SignedIn>
          <div>
            <UserButton />
          </div>
        </SignedIn>
        <SignedOut>
          <div className="flex cursor-pointer">
            <RiUser3Line /> <Button className=" text-sm ml-1">Login</Button>
          </div>
        </SignedOut>
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default DashboardNavbar;
