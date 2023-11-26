import React from "react";

const DashboardItemCard = ({
  label,
  totalItems,
  textcolor,
}: {
  label: string;
  totalItems: number;
  textcolor?: string;
}) => {
  return (
    <div className=" w-fit p-10 rounded-md bg-neutral-100 dark:bg-slate-950   flex-col items-center flex justify-center gap-3">
      <h1 className={`text-5xl font-bold ${textcolor} `}>{totalItems}</h1>
      <p className="text-sm">{label}</p>
    </div>
  );
};

export default DashboardItemCard;
