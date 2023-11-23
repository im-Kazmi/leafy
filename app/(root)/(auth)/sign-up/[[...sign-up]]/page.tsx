import { SignUp } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <div className=" flex w-full min-h-screen justify-center items-center">
      <SignUp />
    </div>
  );
};

export default page;
