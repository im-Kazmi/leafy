"use client";
import Navbar from "@/components/shared/Navbar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className=" max-w-[1400px] flex flex-col w-full gradient min-h-screen">
      <Navbar />
      <div className=" w-full h-full flex flex-col min-h-screen">
        {children}
      </div>
    </main>
  );
}
