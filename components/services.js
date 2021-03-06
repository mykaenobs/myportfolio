import { MdWeb } from 'react-icons/md';
import { FaMobileAlt, FaBroom } from 'react-icons/fa';
import { AiOutlineAntDesign, AiFillFormatPainter } from 'react-icons/ai';
import { GiIdea } from 'react-icons/gi';
import Service from "./service";
import { SvgLeft } from './svg';

const Services = () => {
  return (
    <section className="relative pr-8 pl-8 mt-10 grid grid-cols-1 gap-x-20 gap-y-10 text-white font-light md:max-w-container md:mr-auto md:ml-auto md:grid-cols-2 lg:grid-cols-3">
      <SvgLeft />
      <Service title="Website Design">
        <MdWeb />
      </Service>
      <Service title="Mobile App Development">
        <FaMobileAlt />
      </Service>
      <Service title="UI/UX Design">
        <FaBroom />
      </Service>
      <Service title="Mobile App Design">
        <AiOutlineAntDesign />
      </Service>
      <Service title="Graphic Design">
        <AiFillFormatPainter />
      </Service>
      <Service title="Problem Solving">
        <GiIdea />
      </Service>
    </section>
  );
}

export default Services;