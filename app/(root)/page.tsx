import FeaturePost from "@/components/home/FeaturePost";
import Hero from "@/components/home/Hero";
import HomePosts from "@/components/home/HomePosts";

export default function Home() {
  return (
    <main className=" w-full flex justify-center flex-col  ">
      <Hero />
      {/* <FeaturePost /> */}
      <HomePosts />
    </main>
  );
}
