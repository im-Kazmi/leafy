"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createCategory } from "@/lib/actions/category.action";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const categorySchema = z.object({
  name: z.string().min(2).max(50),
});
export default function Home() {
  const form = useForm<z.infer<typeof categorySchema>>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof categorySchema>) => {
    try {
      await createCategory({
        name: values.name,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main className=" w-full flex justify-center m-auto  ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>category name</FormLabel>
                <FormControl>
                  <Input placeholder="category name" {...field} />
                </FormControl>
                <FormDescription>Enter a valid category name</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      hi
    </main>
  );
}
