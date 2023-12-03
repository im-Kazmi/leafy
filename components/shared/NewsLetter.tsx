"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addUsertoNewsletter } from "@/lib/actions/newsLetter.action";
import { Toaster, toast } from "react-hot-toast";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "email must be at least 2 characters.",
  }),
});

const NewsLetter = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await addUsertoNewsletter(values.email!);

      toast.success("🌹 Thank you!");
    } catch (error) {
      toast.error("😡 Error!");
    }
  }
  return (
    <div className=" w-full border p-10 flex flex-col items-center rounded-md justify-center min-h-[200px] gap-3">
      <Toaster />
      <h1 className=" text-2xl">
        Stay upto <span className=" font-bold text_gradient2">Date</span>
      </h1>
      <p className=" text-center">
        Subscribe to our Newletter and stay up to date with
        <span className=" text_gradient2"> Articles</span> and so much more
      </p>
      <div className=" flex gap-2 w-fullflex">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Email Adress" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <button
              type="submit"
              className=" w-fit rounded-md px-3 py-2 bg-gradient-to-r from-orange-500 to-yellow-200 "
            >
              {form.formState.isSubmitting ? "submitting..." : "Submit"}
            </button>
          </form>
        </Form>
      </div>
      <p className=" text-center mt-2 text-sm">
        I respect your<span className=" text_gradient2"> privacy.</span>{" "}
        Unsubscribe at any time.
      </p>
    </div>
  );
};

export default NewsLetter;
