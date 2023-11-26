import React from "react";
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
import { getUsers } from "@/lib/actions/user.action";
import Image from "next/image";
import DeleteUserModal from "@/components/modals/delete-user.modal";
import { auth } from "@clerk/nextjs";

const page = async ({ searchParams }: any) => {
  const { users, isNext }: any = await getUsers({
    page: searchParams.page ? +searchParams.page : 1,
    pageSize: 7,
  });

  const { userId } = auth();
  return (
    <div className=" w-full">
      <Table className="w-full">
        <TableHeader className=" w-full">
          <TableRow className=" w-full">
            <TableHead className="">picture</TableHead>
            <TableHead className=" ">username</TableHead>
            <TableHead>createdAt</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="">
          {users &&
            users.length > 0 &&
            users.map((user: any) => (
              <TableRow key={user._id} className=" cursor-pointer  ">
                <TableCell className="font-medium ">
                  <Image
                    src={user.imageUrl}
                    width={30}
                    height={30}
                    alt={user.username}
                    className=" rounded-full"
                  />
                </TableCell>
                <TableCell className=" ">{user.fullname}</TableCell>
                <TableCell className="">
                  {moment(user.createdAt).fromNow()}
                </TableCell>
                <TableCell className=" ">{user.role}</TableCell>
                <TableCell className=" flex gap-3">
                  <DeleteUserModal
                    postId={JSON.stringify(user._id)}
                    name={user.fullname}
                  />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <Pagination
        pageNumber={searchParams.page ? +searchParams.page : 1}
        isNext={isNext}
      />
    </div>
  );
};

export default page;
