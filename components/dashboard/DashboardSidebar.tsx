import { DashboardNavs } from "@/constants";
import Link from "next/link";
import React from "react";
import { RiSettingsLine } from "react-icons/ri";

const DashboardSidebar = () => {
  return (
    <div className=" w-60 min-h-screen max-h-screen p-5 fixed z-50  flex flex-col bg-neutral-100 dark:bg-slate-900 ">
      <div className=" flex flex-col">
        <div className=" flex ">
          <h1 className=" text-2xl font-light">Leafy</h1>
        </div>
        <div className=" flex mt-5 flex-col justify-between ">
          <div className=" flex flex-col gap-3">
            {DashboardNavs.map((item) => {
              return (
                <Link
                  href={item.route}
                  key={item.id}
                  className=" w-full cursor-pointer hover:bg-white py-2 px-3 rounded-sm
              dark:hover:bg-slate-950
              text-neutral-600
              dark:text-white
               flex "
                >
                  <h1 className=" my-auto flex gap-3">
                    <span>{item.icon}</span>
                    {item.name}
                  </h1>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div
        className=" w-full mt-auto cursor-pointer hover:bg-white py-2 px-3 rounded-sm
              dark:hover:bg-slate-950
              text-neutral-600
              dark:text-white
               flex"
      >
        <h1 className=" my-auto flex gap-3">
          <span>
            <RiSettingsLine />
          </span>
          settings
        </h1>
      </div>
    </div>
  );
};

export default DashboardSidebar;
