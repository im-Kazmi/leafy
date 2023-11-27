"use client";
import React, { useEffect, useState } from "react";
import Modal from "../shared/Modal";
import { MdDelete } from "react-icons/md";
import { Button } from "../ui/button";
import { deletePostById } from "@/lib/actions/post.action";
import { DeleteUserFromDatabase } from "@/lib/actions/user.action";
import { Input } from "../ui/input";
import { usePathname } from "next/navigation";

const DeleteUserModal = ({ userId, name }: any) => {
  const [isOpen, setIsOpen] = useState(true);
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const pathname = usePathname();
  const DeleteUser = async () => {
    try {
      if (name.toString().trim() !== username.trim()) {
        setError("name mismatched! try again");
        return;
      }
      await DeleteUserFromDatabase(JSON.parse(userId), pathname);
    } catch (error) {
      console.log(error);
    } finally {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    if (name.toString().trim() === username.trim()) {
      setError("");
    }
  }, [username, name]);
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
        <div className=" mt-3">
          {error && <span className=" text-red-400 mt-2">{error}</span>}
        </div>
        <Button onClick={DeleteUser} className=" bg-red-500 mt-5 text-white">
          Delete
        </Button>
      </Modal>
    </div>
  );
};

export default DeleteUserModal;
