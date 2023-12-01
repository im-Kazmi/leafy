import CreatePostForm from "@/components/forms/CreatePostForm";
import { getAllCategories } from "@/lib/actions/category.action";

const CreatePost = async () => {
  const categories = await getAllCategories();

  return (
    <div className=" flex w-full flex-col gap-3 lg:px-20">
      <h1 className=" font-extrabold text-3xl text_gradient2">Create Post</h1>
      <CreatePostForm categories={JSON.stringify(categories)} />
    </div>
  );
};

export default CreatePost;
