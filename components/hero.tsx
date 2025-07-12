import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="max-w-[529px] space-y-6 px-4">
        <div>
          <button className="bg-blue-200 text-blue-600 font-semibold rounded-full px-6 py-2 text-[18px]">
            DESIGN AGENCY
          </button>
        </div>
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-bold leading-tight">
            Dedicated to bring your ideas to life
          </h1>
        </div>
        <div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold text-[20px]">
            Get Started
          </button>
        </div>
      </div>

      <div className="relative w-full md:w-1/2 h-[400px] md:h-[600px]">
        <div className="absolute bg-green-200 rounded-t-[300px] h-[450px] w-[250px] md:h-[550px] md:w-[450px] top-0 left-1/2 -translate-x-1/2 z-0"></div>

        <div className="absolute top-10 left-[30%] w-[300px] h-[200px] z-10">
          <Image
            src="/vector1.png"
            alt="vector"
            fill
            className="object-contain"
            unoptimized
          />
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[320px] h-[400px] md:w-[400px] md:h-[500px] z-20">
          <Image
            src="/casual-life.png"
            alt="casual-life"
            fill
            className="object-contain"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}
