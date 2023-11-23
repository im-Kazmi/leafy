import { SignIn } from "@clerk/nextjs";
import React from "react";

const Page = () => {
  return (
    <div className=" flex w-full min-h-screen justify-center items-center">
      <SignIn />
    </div>
  );
};

export default Page;
