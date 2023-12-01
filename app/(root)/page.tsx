import FeaturePost from "@/components/home/FeaturePost";
import Hero from "@/components/home/Hero";
import HomePosts from "@/components/home/HomePosts";

export default function Home() {
  return (
    <main className=" mt-16 w-full h-full px-10 flex flex-col min-h-screen text-black  ">
      <Hero />
      {/* <FeaturePost /> */}
      <HomePosts />
    </main>
  );
}
