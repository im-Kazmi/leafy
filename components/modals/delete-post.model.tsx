"use client";
import React, { useEffect, useState } from "react";
import Modal from "../shared/Modal";
import { MdDelete } from "react-icons/md";
import { Button } from "../ui/button";
import { deletePostById } from "@/lib/actions/post.action";
import { Input } from "../ui/input";

const DeletePostModal = ({ postId }: any) => {
  const [isOpen, setIsOpen] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const deletePost = async () => {
    try {
      if (inputValue.trim() !== "DELETE") {
        setError("input value mismatched! try again");
        return;
      }
      await deletePostById(JSON.parse(postId));
      setIsOpen(false);
    } catch (error) {
      console.log(error);
      setIsOpen(false);
    } finally {
    }
  };

  useEffect(() => {
    if (inputValue.trim() === "DELETE") {
      setError("");
    }
  }, [inputValue]);
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
        <div className=" flex flex-col gap-2 mt-3">
          <h1>
            To Delete this Post write
            <span className=" text-red-500"> Delete </span>in uppercase
          </h1>
          <Input
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            className=" w-full"
            value={inputValue}
          />
          {error && <span className=" text-red-400">{error}</span>}
        </div>
        <Button onClick={deletePost} className=" bg-red-500 mt-5 text-white">
          Delete
        </Button>
      </Modal>
    </div>
  );
};

export default DeletePostModal;
