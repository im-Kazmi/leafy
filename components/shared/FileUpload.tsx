"use client";

import "@uploadthing/react/styles.css";
import { UploadButton, UploadDropzone } from "@/utils/uploadthing";
import Image from "next/image";
import { useState } from "react";

interface FileUploadProps {
  setValue: any;
  value: string;
  imageAlt?: string;
}
export default function FileUpload({
  setValue,
  value,
  imageAlt,
}: FileUploadProps) {
  if (value) {
    return (
      <div className=" w-full flex">
        <Image src={value} width={500} height={300} alt={imageAlt!} />
      </div>
    );
  }
  return (
    <div className="">
      <UploadDropzone
        className=" w-full lg:min-w-[100%] dark:border-white"
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          setValue("imageUrl", res[0].url);
        }}
        onUploadError={(error: Error) => {
          alert(`ERROR! ${error.message}`);
        }}
      ></UploadDropzone>
    </div>
  );
}
