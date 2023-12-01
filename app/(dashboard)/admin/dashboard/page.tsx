import DashboardItemCard from "@/components/dashboard/DashboardItemCard";
import { getModelsDocumentsCount } from "@/lib/actions/dashboard.action";

const Page = async () => {
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

export default Page;
