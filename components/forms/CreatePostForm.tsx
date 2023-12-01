"use client";

import React, { useRef } from "react";
// import toast, { Toaster } from "react-hot-toast";
import { Editor } from "@tinymce/tinymce-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { usePathname, useRouter } from "next/navigation";
import FileUpload from "@/components/shared/FileUpload";
import CategoriesSelect from "@/components/dashboard/CategoriesSelect";
import { createPost } from "@/lib/actions/post.action";
import TextEditor from "../shared/Editor";

const formSchema = z.object({
  title: z
    .string()
    .min(3, {
      message: "title must be at least 3 characters.",
    })
    .max(200, {
      message: "title must be less than 200 characters.",
    }),
  content: z.string().min(3, {
    message: "content must be at least 3 characters.",
  }),
  imageUrl: z.string().min(1, {
    message: "Image is required",
  }),
  tags: z.array(z.string()).min(1).max(3),
  category: z.string().min(1, {
    message: "you must add one category",
  }),
});

const CreatePostForm = ({ categories }: { categories: any }) => {
  const router = useRouter();
  const editorRef = useRef(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      imageUrl: "",
      content: "",
      tags: [],
      category: "",
    },
  });

  const { isSubmitting, isLoading, isDirty } = form.formState;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await createPost({
        title: values.title,
        category: values.category,
        imageUrl: values.imageUrl,
        content: values.content,
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  const handleTagDelete = (selectedTag: any) => {
    const tags = form.getValues("tags").filter((tag) => tag !== selectedTag);
    form.setValue("tags", tags);
  };

  const handleInputKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    field: any
  ) => {
    if (e.key === "Enter" && field.name === "tags") {
      e.preventDefault();
      const tagInput = e.target as HTMLInputElement;
      const tagValue = tagInput.value.trim();

      if (tagValue !== "") {
        if (tagValue.length > 15) {
          return form.setError("tags", {
            message: "Tag must be less than 15 characters",
          });
        }
        if (
          !field.value.includes(tagValue as never) &&
          form.getValues("tags").length <= 2
        ) {
          form.setValue("tags", [...field.value, tagValue]);
          tagInput.value = "";
          form.clearErrors("tags");
        }
      } else {
        form.trigger();
      }
    }
  };
  return (
    <Form {...form}>
      {/* <Toaster /> */}
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col w-full  gap-10 mt-10"
      >
        <FormField
          control={form.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem className=" w-full">
              <FormLabel className="  ">
                Image <span className=" text-green-400">*</span>
              </FormLabel>
              <FormControl></FormControl>
              <FormDescription className=" flex flex-shrink-0 w-full">
                <FileUpload
                  setValue={form.setValue}
                  value={field.value}
                  imageAlt={form.getValues("title")}
                />
              </FormDescription>
              <FormMessage className=" text-red-600" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="  ">
                Qestion Title <span className=" text-green-400">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Post Title"
                  className="  bg-neutral-100  border-none dark:bg-slate-900    outline-none focus:ring-0 ring-0"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Imagine you are asking a question to another person
              </FormDescription>
              <FormMessage className=" text-red-600" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel className=" ">
                Explanation <span className=" text-orange-400">*</span>
              </FormLabel>
              <FormControl>
                <TextEditor field={field} />
              </FormControl>
              <FormDescription>Explain your Question concisely</FormDescription>
              <FormMessage className=" text-red-600" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel className=" ">
                Tags <span className=" text-green-400">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Add Tags"
                  disabled={field.value.length === 3}
                  className="   bg-neutral-100  border-none dark:bg-slate-900    outline-none"
                  onKeyDown={(e) => handleInputKeyDown(e, field)}
                />
                {/* {field.value.length > 0 && ( */}

                {/* )} */}
              </FormControl>
              <FormDescription></FormDescription>
              <div className=" flex w-full gap-3 mt-5">
                {field.value.map((tag) => (
                  <div
                    key={tag}
                    className=" w-fit px-3 cursor-pointer gap-5 py-1 rounded-lg bg-neutral-200 dark:bg-slate-800 text-black dark:text-white "
                  >
                    {tag}
                    <span
                      onClick={() => handleTagDelete(tag)}
                      className="ml-5 "
                    >
                      x
                    </span>
                  </div>
                ))}
              </div>
              <FormMessage className=" text-red-600" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="  ">
                Select Categories <span className=" text-green-400">*</span>
              </FormLabel>
              <FormControl></FormControl>
              <FormDescription>
                <CategoriesSelect
                  categories={JSON.parse(categories)}
                  setValue={form.setValue}
                />
              </FormDescription>
              <FormMessage className=" text-red-600" />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="  bg-neutral-200 dark:bg-slate-800 text-black dark:text-white hover:bg-neutral-200 dark:hov:bg-slate-900"
        >
          {isSubmitting ? "Posting..." : "Post"}
        </Button>
      </form>
    </Form>
  );
};

export default CreatePostForm;
