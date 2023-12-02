/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Navbar2 from "@/components/shared/Navbar2";
import { usePathname } from "next/navigation";
import Head from "next/head";
import React from "react";
import Script from "next/script";
import GoogleAnalytics from "@/components/shared/GoogleAnalytics";
export default function layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <main className="flex flex-col w-full min-h-screen bg-neutral-50 dark:bg-neutral-950 gradient">
      <GoogleAnalytics />
      {!pathname.startsWith("/blog/") && <Navbar2 />}
      <div className="">{children}</div>
    </main>
  );
}
