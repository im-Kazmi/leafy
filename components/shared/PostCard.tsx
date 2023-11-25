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
    <Card className=" bg-white dark:bg-transparent text-black dark:text-white max-w-[400px]">
      <CardHeader className=" m-0 p-1">
        <Image
          src={post.imageUrl}
          width={400}
          height={200}
          alt=""
          className=" rounded-t-sm opacity-75  max-h-[200px] object-cover"
        />
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className=" flex flex-col items-start">
        <h1 className=" text-xl">{post.title}</h1>
        <div className=" flex gap-2 items-start mt-2">
          <Image
            src={post.author.imageUrl}
            width={30}
            height={30}
            alt={post.author.fullname}
            className=" rounded-full my-auto "
          />
          <div className="flex flex-col">
            <h1>{post.author.fullname}</h1>
            <span className=" text-[12px]">
              {moment(post.createdAt).fromNow()}
            </span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
