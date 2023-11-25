"use client";
import { homeNavs, topics } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { RiUser3Line } from "react-icons/ri";
import { Button } from "../ui/button";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ThemeSwitch from "./ThemeSwitch";

const DashboardNavbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div
      className=" flex w-full justify-end  h-14 
     border-neutral-200 text-black dark:text-white"
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
