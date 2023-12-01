import DashboardItemCard from "@/components/dashboard/DashboardItemCard";
import { getModelsDocumentsCount } from "@/lib/actions/dashboard.action";
import { getClerkUser } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs";
import React from "react";

const page = async () => {
  const { usersCount, blogsCount, categoriesCount }: any =
    await getModelsDocumentsCount();

  return (
    <div className=" flex gap-5 w-full flex-wrap">
      <DashboardItemCard
        label="Users"
        totalItems={usersCount}
        textcolor=" text_gradient"
      />
      <DashboardItemCard
        label="Posts"
        textcolor="text_gradient2"
        totalItems={blogsCount}
      />
    </div>
  );
};

export default page;
