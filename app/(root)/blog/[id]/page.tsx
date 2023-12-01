import { getPostById } from "@/lib/actions/post.action";
import React from "react";
import { Inter, Poppins } from "next/font/google";
import ParseHtml from "@/components/shared/ParseHtml";
import Image from "next/image";
import moment from "moment";
import { GoArrowLeft } from "react-icons/go";
import ThemeSwitch from "@/components/shared/ThemeSwitch";
import { PiHeartFill } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import { MdLink } from "react-icons/md";
import { toast, Toaster } from "react-hot-toast";
import ShareLink from "@/components/shared/ShareLink";
import NewsLetter from "@/components/shared/NewsLetter";
import UserCard from "@/components/shared/UserCard";

const poppins = Poppins({
  subsets: ["latin"],
  style: "normal",
  weight: ["400"],
});

const Page = async ({ params }: any) => {
  const { id } = params;
  const post = await getPostById(id);

  return (
    <div className={`flex  min-h-screen ${poppins.className}`}>
      <Toaster />
      <div className="container w-full flex flex-col justify-center items-center py-10 max-w-[900px] ">
        <span className="text-xs my-5 dark:text-white text_gradient hover:border-b cursor-pointer">
          @{post?.category}
        </span>
        <div className=" flex justify-between lg:max-w-[800px]">
          <span className="text-2xl cursor-pointer hover:animate-pulse">
            <GoArrowLeft />
          </span>
          <h1 className="text-4xl font-lightbold  title dark:text-white text-center font-bold">
            {post.title}
          </h1>
          <div className="w-fit">
            <ThemeSwitch />
          </div>
        </div>
        <div className=" flex gap-4 mt-4">
          <Image
            src={post.author.imageUrl}
            width={30}
            height={30}
            alt={post.author.fullname}
            className="rounded-full w-8 h-8"
          />
          <div className="flex flex-col ">
            <h1 className=" text-sm">{post.author.fullname}</h1>
            <span className=" text-[10px]">
              {moment(post.createdAt).fromNow()}
            </span>
          </div>
        </div>
        <div className=" mt-10 lg:text-2xl lg:max-w-[700px]">
          <ParseHtml data={post.content}></ParseHtml>
        </div>
        <div className="flex flex-col gap-3 lg:max-w-[700px]">
          <ShareLink />
          <UserCard
            name={post?.author.fullname}
            imageUrl={post?.author?.imageUrl}
            bio={post?.author?.bio}
          />
          <NewsLetter />
        </div>
      </div>
    </div>
  );
};

export default Page;
