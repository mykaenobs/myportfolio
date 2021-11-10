import Link from 'next/link';
import { useState } from "react";
import {HiMenu} from "react-icons/hi";
import {white} from "tailwindcss/colors";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const navControl = () => {
    setNav(!nav);
    console.log(nav)
  }

  return (
    <nav className="max-w-container mr-auto ml-auto flex justify-between items-center pt-4 pb-4 text-sm">
      <h1><Link href="#"><a href="" className="block h-8 w-8 bg-white"></a></Link></h1>
      <div className={"bg-white w-1/2 h-full gap-8 text-red-100 invisible font-normal md:font-light absolute top-0 left-0 pt-8 md:p-0 md:bg-opacity-0 md:items-center md:w-full md:h-0 md:text-white md:flex md:justify-end md:relative md:visible"}>
        <Link href="#"><a className="flex items-center gap-4 p-5 pl-8 md:p-0 md:inline-block"><span className="w-2 h-2 rounded-full bg-red-100 "></span>Services</a></Link>
        <Link href="#"><a className="flex items-center gap-4 p-5 pl-8 md:p-0 md:inline-block"><span className="w-2 h-2 rounded-full bg-red-100 "></span>Our Projects</a></Link>
        <Link href="#"><a className="flex items-center gap-4 p-5 pl-8 md:p-0 md:inline-block"><span className="w-2 h-2 rounded-full bg-red-100 "></span>Ratings</a></Link>
        <Link href="#"><a className="flex items-center gap-4 p-5 pl-8 md:p-0 md:inline-block"><span className="w-2 h-2 rounded-full bg-red-100 "></span>Testimonials</a></Link>
      </div>
      <div className="md:hidden">
        <span className="cursor-pointer bg-purple-900" onClick={navControl} >
          <HiMenu size={26} color={white} title={'Menu bar'} />
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
