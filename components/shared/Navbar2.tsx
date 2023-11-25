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

const Navbar2 = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div
      className=" flex px-20 h-16 justify-between 
       w-full p
       fixed bg-white bg-opacity-25 backdrop-blur-lg z-50 items-center
     border-neutral-200 dark:bg-transparent  text-black dark:text-white"
    >
      <div className=" flex gap-3 w-full">
        <Link
          href={"/"}
          className=" flex gap-2 my-auto border-r-2 px-3 border-neutral-300"
        >
          <h1 className=" font-bold uppercase text-2xl ">Leafy</h1>
        </Link>
        <div className=" flex gap-5 mb-1  max-md:hidden w-full  items-center">
          {homeNavs.slice(0, 2).map((item: any) => {
            const isActive = pathname.includes(item.route);
            return (
              <Link
                key={item.id}
                href={item.route}
                className={`  text-sm ${isActive && "text_gradient2"}`}
              >
                {item.name}
              </Link>
            );
          })}
          <Select>
            <SelectTrigger className="w-[180px] focus:ring-0 focus:ring-offset-0 bg-transparent border-none   ">
              <SelectValue placeholder="Select a Topic" className=" " />
            </SelectTrigger>
            <SelectContent className="dark:bg-neutral-950 bg-opacity-50">
              <SelectGroup>
                <SelectLabel>Topics</SelectLabel>
                {topics.map((topic) => {
                  return (
                    <SelectItem
                      key={topic.id}
                      value={topic.name.toLowerCase()}
                      className=""
                    >
                      {topic.name}
                    </SelectItem>
                  );
                })}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex  w-full justify-center items-center"></div>
      <div className=" flex gap-4 my-auto">
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
            <RiUser3Line /> <Button className=" text-sm ml-1">Login</Button>
          </div>
        </SignedOut>
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Navbar2;
