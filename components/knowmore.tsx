import Image from "next/image";
import Link from "next/link";

export default function KnowMore() {
  return (
    <div className="px-16 py-8 bg-primary/15 rounded-xl">
      <div className="text-center py-4">
        <p className="text-xs">ABOUT US</p>
        <h2 className="text-4xl font-bold">Know More about us.</h2>
      </div>
      <div className="flex items-center justify-between gap-20 mt-8">
        <div className="flex flex-col bg-blue-950 rounded-2xl p-6 text-white gap-4">
          <p className="text-xl font-semibold">About us.</p>
          <Image src="/ellipse.png" width={50} height={50} alt="ellipse" />
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem
          </p>
          <Link href="/" className="underline font-bold">
            Learn more
          </Link>
        </div>
        <div className="flex flex-col bg-white rounded-2xl p-6 gap-4">
          <p className="text-xl font-semibold">Services.</p>
          <Image src="/ellipse.png" width={50} height={50} alt="ellipse" />
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem
          </p>
          <Link href="/" className="underline font-bold">
            Learn more
          </Link>
        </div>
        <div className="flex flex-col bg-white rounded-2xl p-6 gap-4">
          <p className="text-xl font-semibold">Our Works.</p>
          <Image src="/ellipse.png" width={50} height={50} alt="ellipse" />
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem{" "}
          </p>
          <Link href="/" className="underline font-bold">
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
}
