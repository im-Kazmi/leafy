import { getAllPosts } from "@/lib/actions/post.action";
import React from "react";
import PostCard from "../shared/PostCard";
interface Post {
  title: string;
  _id: string;
  content: string;
  imageUrl: string;
  author: {
    fullname: string;
    imageUrl: string;
    _id: string;
  };
}
const HomePosts = async () => {
  const posts = await getAllPosts();
  console.log(posts);
  return (
    <div className="flex gap-3 px-10 py-5 flex-wrap justify-center flex-col ">
      <h1 className=" text-2xl font-extrabold text_gradient">Latest Posts</h1>
      <div className=" flex gap-3 flex-wrap justify-center">
        {posts &&
          posts.length > 0 &&
          posts.map((post: any) => <PostCard key={post._id} post={post!} />)}
      </div>
    </div>
  );
};

export default HomePosts;
