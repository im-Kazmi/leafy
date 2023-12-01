import React from "react";
import { getAllPosts } from "@/lib/actions/dashboard.action";
import { MdDelete } from "react-icons/md";
import { RiEditBoxLine } from "react-icons/ri";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import moment from "moment";
import Pagination from "@/components/shared/Pagination";
import Modal from "@/components/shared/Modal";
import { Button } from "@/components/ui/button";
import DeletePostModal from "@/components/modals/delete-post.model";
import Link from "next/link";

const page = async ({ searchParams }: any) => {
  const { posts, isNext }: any = await getAllPosts({
    page: searchParams.page ? +searchParams.page : 1,
    pageSize: 7,
  });

  return (
    <div className=" w-full">
      <div className=" flex w-full justify-between py-3">
        <h1 className=" text-2xl font-extrabold text_gradient2">Blogs</h1>
        <Link
          href={"/admin/dashboard/blogs/create"}
          className=" w-fit px-3 py-1 rounded-md bg-gradient-to-r from-orange-500 text-white to-yellow-200"
        >
          create new
        </Link>
      </div>
      <Table className="w-full">
        <TableHeader className=" w-full">
          <TableRow className=" w-full">
            <TableHead className="">Title</TableHead>
            <TableHead className=" ">Author</TableHead>
            <TableHead>createdAt</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="">
          {posts &&
            posts.length > 0 &&
            posts.map((post: any) => (
              <TableRow key={post?._id} className=" cursor-pointer  ">
                <TableCell className="font-medium ">
                  {post?.title.slice(0, 30)}...
                </TableCell>
                <TableCell className=" ">{post?.author?.fullname}</TableCell>
                <TableCell className="">
                  {moment(post?.createdAt).fromNow()}
                </TableCell>
                <TableCell className=" flex gap-3">
                  <Modal
                    trigger={
                      <span className=" text-blue-500 text-xl cursor-pointer">
                        <RiEditBoxLine />
                      </span>
                    }
                    title="Edit Post"
                    isOpen={true}
                  >
                    <Button>Edit</Button>
                  </Modal>

                  <DeletePostModal postId={JSON.stringify(post._id)} />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      {posts && posts.length > 7 && (
        <Pagination
          pageNumber={searchParams.page ? +searchParams.page : 1}
          isNext={isNext}
        />
      )}
    </div>
  );
};

export default page;
