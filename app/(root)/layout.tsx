"use client";
import Navbar2 from "@/components/shared/Navbar2";

import React from "react";
export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className=" max-w-[1400px] flex flex-col w-full min-h-screen   bg-neutral-50 dark:bg-neutral-950 gradient text-black">
      <Navbar2 />
      <div className=" mt-16 w-full h-full px-10 flex flex-col min-h-screen text-black">
        {children}
      </div>
    </main>
  );
}
