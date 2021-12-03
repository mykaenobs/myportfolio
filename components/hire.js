import Link from "next/link";

const Hire = () => {
  return (
    <div className="rotate-12 pointer-events-auto">
      <Link href="callto:+2348075961726">
        <a className="transform -rotate-45 w-16 h-16 -mt-8 -ml-8 bg-white border-2 border-red-100 text-red-100 text-center flex items-center justify-center rounded-full fixed left-2/4 top-2/4 font-jet text-xs md:text-sm font-medium uppercase shadow-md z-40 md:h-20 md:w-20 md:-ml-10 md:-mt-10">
          Hire <br /> Us
        </a>
      </Link>
    </div>
  );
}

export  default Hire;