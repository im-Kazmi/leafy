"use client";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardNavbar from "@/components/shared/DashboardNavbar";
import { useThemeContext } from "@/context/ThemeContext";
import { getClerkUser } from "@/lib/actions/user.action";
import { IUser } from "@/models/user.model";
import { auth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser>();

  const router = useRouter();
  const getUser = async () => {
    try {
      const clerkUser: IUser = await getClerkUser();
      setUser(clerkUser);
    } catch (error) {
      console.log(error);
    }
  };
  getUser();

  useEffect(() => {
    if (user && user?.role !== "admin") {
      router.push("/");
    }
  }, [user, router]);
  // const { theme }: any = useThemeContext();

  return (
    <div className={` flex min-h-screen w-full `}>
      <div className=" max-md:hidden">
        <DashboardSidebar />
      </div>

      <div className=" w-full md:ml-60 flex flex-col items-center  ">
        <DashboardNavbar />
        <div className="px-10 flex  w-full mt-5">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
