import Image from "next/image";

const Testimonial = ({ desc, name, pos, num }) => {
  return (
    <div className="bg-white rounded-xl border-2 border-red-100 border-opacity-30 p-8 relative z-50 flex items-center gap-x-8">
      <span className="block min-w-testy h-16 bg-grey-100 rounded-full overflow-hidden relative">
        <Image src={"https://i.pravatar.cc/150?img=" + num} alt="Project one" layout="responsive" height={140} width={140} />
      </span>
      <div className="">
        <strong className="block text-red-200 text-sm font-medium">{name}</strong>
        <small className="text-grey-200 ">{pos}</small>
        <p className="text-sm mt-4 text-grey-900 font-normal">{desc}</p>
      </div>
    </div>
  );
}

export  default Testimonial;