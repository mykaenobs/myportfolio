import Link from 'next/link';
import { useState } from "react";
import {HiMenu} from "react-icons/hi";
import {white} from "tailwindcss/colors";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <nav className="max-w-container mr-auto ml-auto flex justify-between items-center pt-4 pb-4 text-sm">
      <h1><Link href="/"><a href="" className="block h-8 w-8 bg-white"></a></Link></h1>
      <div className={"bg-white w-1/2 h-full gap-8 text-red-100  transition-all " + ((nav) ? "left-0": "-left-1/2") + " font-normal z-10 md:font-light absolute top-0 pt-8 md:p-0 md:bg-opacity-0 md:items-center md:w-full md:h-0 md:text-white md:flex md:justify-end md:relative md:left-0"}>
        <Link href="/#services"><a className="flex items-center gap-4 p-5 pl-8 md:p-0 md:inline-block"><span className="w-2 h-2 rounded-full bg-red-100 "></span>Services</a></Link>
        <Link href="/projects"><a className="flex items-center gap-4 p-5 pl-8 md:p-0 md:inline-block"><span className="w-2 h-2 rounded-full bg-red-100 "></span>Our Projects</a></Link>
        <Link href="/#stats"><a className="flex items-center gap-4 p-5 pl-8 md:p-0 md:inline-block"><span className="w-2 h-2 rounded-full bg-red-100 "></span>Stats</a></Link>
        <Link href="/#testimonials"><a className="flex items-center gap-4 p-5 pl-8 md:p-0 md:inline-block"><span className="w-2 h-2 rounded-full bg-red-100 "></span>Testimonials</a></Link>
        <Link href="/contact"><a className="flex items-center gap-4 p-5 pl-8 md:p-0 md:inline-block"><span className="w-2 h-2 rounded-full bg-red-100 "></span>Get In Touch</a></Link>
      </div>
      <div className="md:hidden">
        <span className="cursor-pointer bg-purple-900" onClick={() => setNav(!nav)} >
          <HiMenu size={26} color={white} title={'Menu bar'} />
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
