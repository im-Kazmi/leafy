/* eslint-disable react/no-unescaped-entities */
"use client";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardNavbar from "@/components/shared/DashboardNavbar";
import { useThemeContext } from "@/context/ThemeContext";
import { getClerkUser } from "@/lib/actions/user.action";
import { IUser } from "@/models/user.model";
import { auth } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser>();

  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const clerkUser: IUser = await getClerkUser();
        setUser(clerkUser);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [router, pathname]);

  if (user && user?.role !== "admin") {
    router.push("/");
    return null;
  }
  return (
    <div className={` flex min-h-screen w-full `}>
      {user && user.role === "admin" ? (
        <div className="flex w-full">
          <div className=" max-md:hidden">
            <DashboardSidebar />
          </div>
          <div className=" w-full md:ml-60 flex flex-col items-center  ">
            <DashboardNavbar />
            <div className="px-10 flex  w-full mt-5">{children}</div>
          </div>
        </div>
      ) : (
        <div className="flex w-full justify-center text-neutral-600 items-center flex-col bg-neutral-50">
          <h1 className=" text-3xl font-extrabold  ">
            I'm not a complete <span className="text_gradient2">idiot</span>{" "}
          </h1>
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;
