import { getAllPosts } from "@/lib/actions/post.action";
import React from "react";
import PostCard from "../shared/PostCard";
import SearchBar from "../shared/SearchBar";
import { postsFilters } from "@/constants";
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
  return (
    <div className=" flex flex-col w-full gap-5 ">
      {/* <div className="w-60  self-end">
        <SearchBar />
      </div> */}
      <div className="flex gap-3  py-5 flex-col ">
        <div className=" flex gap-10">
          <h1 className=" text-2xl font-extrabold text-neutral-800 dark:text-white ">
            All Posts
          </h1>
          <div className=" gap-3 flex">
            {postsFilters.map((filter) => {
              return (
                <div
                  key={filter.id}
                  className=" w-fit px-3 py-1 rounded-md bg-white bg-opacity-70 justify-center cursor-pointer"
                >
                  {filter.name}
                </div>
              );
            })}
          </div>
        </div>
        <div className=" flex gap-3 flex-wrap justify-center ">
          {posts &&
            posts.length > 0 &&
            posts.map((post: any) => <PostCard key={post._id} post={post!} />)}
        </div>
      </div>
    </div>
  );
};

export default HomePosts;
