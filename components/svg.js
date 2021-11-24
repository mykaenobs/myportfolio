const SvgLeft = () => {
  return (
    <div className="h-80 w-80 rounded-full bg-gradient-to-b from-red-100 to grid place-content-center absolute z-0 -left-72 -top-36">
      <div className="h-48 w-48 rounded-full bg-white"></div>
    </div>
  );
};

const SvgRight = () => {
  return (
    <div className="h-80 w-80 rounded-full bg-gradient-to-b from-red-100 to grid place-content-center absolute z-0 -right-72 -top-36">
      <div className="h-48 w-48 rounded-full bg-white"></div>
    </div>
  );
};

export { SvgLeft, SvgRight };