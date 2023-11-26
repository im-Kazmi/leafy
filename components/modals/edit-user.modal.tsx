"use client";
import React, { useState } from "react";
import Modal from "../shared/Modal";
import { MdDelete } from "react-icons/md";
import { Button } from "../ui/button";
import { deletePostById } from "@/lib/actions/post.action";

const EditUserModal = ({ postId }: any) => {
  const [isOpen, setIsOpen] = useState(true);

  const deletePost = async () => {
    try {
      await deletePostById(JSON.parse(postId));
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
        title="Delete Post"
        isOpen={true}
      >
        <Button onClick={deletePost} className=" bg-red-500 mt-5 text-white">
          Delete
        </Button>
      </Modal>
    </div>
  );
};

export default EditUserModal;
