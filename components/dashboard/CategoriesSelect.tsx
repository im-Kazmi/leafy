import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getAllCategories } from "@/lib/actions/category.action";

const CategoriesSelect = ({
  categories,
  setValue,
}: {
  categories: any;
  setValue: any;
}) => {
  return (
    <Select onValueChange={(value) => setValue("category", value)}>
      <SelectTrigger className="w-[180px] bg-neutral-200 dark:bg-slate-900 dark:text-white border-none text-neutral-600 ">
        <SelectValue
          placeholder="Categories"
          className=" placeholder:text-black text-base "
        />
      </SelectTrigger>
      <SelectContent className="  dark:bg-slate-900 dark:text-white ">
        {categories &&
          categories.length > 0 &&
          categories.map((category: any) => (
            <SelectItem
              className="  hover:bg-white"
              key={categories?._id}
              value={category?.name?.toLowerCase() as string}
            >
              {category?.name}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  );
};

export default CategoriesSelect;
