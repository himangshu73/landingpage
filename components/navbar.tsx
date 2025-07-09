export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-8">
      <div className="font-semibold text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] xl:text-4xl">
        Desgy Solutions
      </div>
      <div className="flex items-center gap-4 text-[18px]">
        <div>Latest Works</div>
        <div>View All</div>
      </div>
      <div className="flex gap-4 text-[18px]">
        <div>About Us</div>
        <div>Services</div>
        <div>FAQ</div>
        <div>Blog</div>
      </div>
      <div>
        <button className="border rounded-full px-4 py-2 font-semibold text-[20px]">
          Contact Us
        </button>
      </div>
    </nav>
  );
}
