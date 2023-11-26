import Image from "next/image";
import React from "react";
import moment from "moment";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Post {
  title: string;
  _id: string;
  content: string;
  imageUrl: string;
  createdAt: string;
  author: {
    fullname: string;
    imageUrl: string;
    _id: string;
  };
}
const PostCard = ({ post }: { post: Post }) => {
  return (
    <Card className=" bg-white dark:bg-transparent text-black dark:text-white max-w-[300px] min-h-[400px] max-h-[400px] rounded-xl border-none">
      <CardHeader className=" m-0 p-1 relative ">
        <Image
          src={post.imageUrl}
          width={400}
          height={200}
          alt=""
          className="rounded-t-sm opacity-50 max-h-[390px] min-h-[390px]  rounded-md object-cover"
        />

        <div className=" flex flex-col gap-2 absolute bottom-0 px-5 py-2">
          <h1 className=" text-md">{post.title}</h1>
          <div className=" flex gap-2 items-start mt-2">
            <Image
              src={post.author.imageUrl}
              width={30}
              height={30}
              alt={post.author.fullname}
              className=" rounded-full my-auto  "
            />
            <div className="flex flex-col">
              <h1 className=" text-xs">{post.author.fullname}</h1>
              <span className=" text-[10px]">
                {moment(post.createdAt).fromNow()}
              </span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className=" flex absolute flex-col items-start"></CardContent>
    </Card>
  );
};

export default PostCard;
