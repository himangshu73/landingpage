import Accordian from "@/components/accordian/accordian";
import Hero from "@/components/hero";
import KnowMore from "@/components/knowmore";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-[1920px] mx-auto px-6 sm:px-8 md:px-12 lg:px-24 xl:px-40 2xl:px-[312px]">
      <Navbar />
      <hr className="border-t border-gray-300 my-2" />
      <Hero />
      <KnowMore />
      <Accordian />
    </div>
  );
}
