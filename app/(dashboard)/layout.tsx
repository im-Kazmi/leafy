"use client";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardNavbar from "@/components/shared/DashboardNavbar";
import { useThemeContext } from "@/context/ThemeContext";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { theme }: any = useThemeContext();
  return (
    <div
      className={` flex min-h-screen w-full  ${theme === "dark" && "gradient"}`}
    >
      <div className=" max-md:hidden">
        <DashboardSidebar />
      </div>
      <div className=" w-full md:ml-60 flex flex-col items-center px-10 py-5 ">
        <DashboardNavbar />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
