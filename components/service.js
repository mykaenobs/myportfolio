
const Service = ({ title, children }) => {
  return (
    <div className="bg-red-100 flex items-center gap-8 p-6 pr-8 pl-8 rounded-3xl rounded-tl-none">
      <span className="inline-flex items-center justify-center text-3xl rounded-full bg-white text-red-100 p-2">
        {children}
      </span>
      <p className="whitespace-nowrap">{title}</p>
    </div>
  );
}

export  default Service;