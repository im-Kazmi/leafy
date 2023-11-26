"use client";
import React, { useState } from "react";
import Modal from "../shared/Modal";
import { MdDelete } from "react-icons/md";
import { Button } from "../ui/button";
import { deletePostById } from "@/lib/actions/post.action";
import { DeleteUserFromDatabase } from "@/lib/actions/user.action";
import { Input } from "../ui/input";

const DeleteUserModal = ({ userId, name }: any) => {
  const [isOpen, setIsOpen] = useState(true);
  const [username, setUsername] = useState("");

  const DeleteUser = async () => {
    try {
      await DeleteUserFromDatabase(JSON.parse(userId));
    } catch (error) {
      console.log(error);
    } finally {
      setIsOpen(false);
    }
  };
  return (
    <div>
      <Modal
        trigger={
          <span className=" text-red-600 text-xl cursor-pointer">
            <MdDelete />
          </span>
        }
        title="Delete User"
        isOpen={true}
      >
        <h1 className=" text-sm py-2">
          Write <span className=" font-bold text-red-500">{name}</span> in the
          input and click Delete
        </h1>
        <Input
          type="text"
          placeholder="Enter username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button onClick={DeleteUser} className=" bg-red-500 mt-5 text-white">
          Delete
        </Button>
      </Modal>
    </div>
  );
};

export default DeleteUserModal;
