import { MdWeb } from "react-icons/md";
import { FaMobileAlt, FaBroom } from "react-icons/fa";
import Service from "./service";

const Services = () => {
  return (
    <section className="pr-8 pl-8 mt-10 grid grid-cols-1 gap-x-20 gap-y-10 text-white font-light md:max-w-container md:mr-auto md:ml-auto md:grid-cols-2 lg:grid-cols-3">
      <Service title="Website Design">
        <MdWeb />
      </Service>
      <Service title="Mobile App Development">
        <FaMobileAlt />
      </Service>
      <Service title="UI/UX Design">
        <FaBroom />
      </Service>
      <Service title="Mobile App Development">
        <FaMobileAlt />
      </Service>
      <Service title="UI/UX Design">
        <FaBroom />
      </Service>
      <Service title="Website Design">
        <MdWeb />
      </Service>
    </section>
  );
}

export default Services;