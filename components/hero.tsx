import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mt-8 gap-8">
      <div className="max-w-[529px] max-h-[400px]">
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
        <div className="absolute bg-green-200 rounded-t-full h-[80%] w-[90%] z-0 top-0 left-20"></div>
        <Image
          src="/vector1.png"
          height={272}
          width={686}
          alt="vector"
          className="absolute top-0 right-20 z-10"
        />
        <Image
          src="/casual-life.png"
          height={542}
          width={742}
          alt="casual-life"
          className="absolute top-20 left-0 z-20"
        />
      </div>
    </div>
  );
}
