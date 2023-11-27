"use client";
import React, { useEffect, useState } from "react";
import Modal from "../shared/Modal";
import { MdDelete } from "react-icons/md";
import { Button } from "../ui/button";
import { deletePostById } from "@/lib/actions/post.action";
import { RiEditBoxLine } from "react-icons/ri";
import { updateUserRole } from "@/lib/actions/user.action";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "../ui/input";
import { usePathname } from "next/navigation";
import { Span } from "next/dist/trace";

const EditUserModal = ({ userId, username, userRole }: any) => {
  const [isOpen, setIsOpen] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [role, setRole] = useState(userRole);

  const pathname = usePathname();

  const UpdateUser = async () => {
    try {
      if (username.toString().trim() !== inputValue.trim()) {
        setError("name mismatched! try again");
        return;
      }
      await updateUserRole(JSON.parse(userId), role, pathname);
      setIsOpen(false);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  useEffect(() => {
    if (inputValue == username || inputValue == "") {
      setError("");
    }
  }, [username, inputValue]);
  return (
    <div>
      <Modal
        trigger={
          <span className=" text-blue-500 text-xl cursor-pointer">
            <RiEditBoxLine />
          </span>
        }
        title="Edit User"
        isOpen={isOpen}
      >
        <Select
          defaultValue={userRole}
          onValueChange={(value) => setRole(value.toString())}
        >
          <SelectTrigger className="w-[180px] mt-5">
            <SelectValue placeholder="Role" defaultValue={userRole} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="guest">Guest</SelectItem>
            <SelectItem value="moderator">Moderator</SelectItem>
            <SelectItem value="admin">Admin</SelectItem>
          </SelectContent>
        </Select>

        {role !== "guest" && userRole !== role && (
          <div className=" flex flex-col gap-2 mt-3">
            <h1>
              To make {username} as {role} type
              <span className=" text-red-500">{username} </span>
            </h1>
            <Input
              onChange={(e) => setInputValue(e.target.value)}
              type="text"
              className=" w-full"
              value={inputValue}
            />
            {error && <span className=" text-red-400">{error}</span>}
          </div>
        )}
        <Button onClick={UpdateUser} className=" bg-red-500 mt-5 text-white">
          Save changes
        </Button>
      </Modal>
    </div>
  );
};

export default EditUserModal;
