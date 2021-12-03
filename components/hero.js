import Hire from "./hire";

const Hero = () => {
  return (
    <div className="flex h-full mr-auto ml-auto max-w-container -mt-16 pointer-events-none">
      <div className="flex-1 flex justify-center flex-col h-full">
        <hgroup className="font-jet text-white text-5xl sm:text-7xl uppercase">
          <h2 className="font-thin">Micah</h2>
          <hr className="border-white w-36 md:w-56 mt-2 mb-2 ml-1 border-opacity-25" />
          <h1>Enobakhare</h1>
        </hgroup>
        <div className="flex items-center gap-2">
          <hr className="border-white w-6 mt-2 mb-2 ml-1 border-opacity-25" /><small className="uppercase text-white text-opacity-50 font-light">By Name</small>
        </div>
        <div className="mt-14">
          <small className="uppercase text-white text-opacity-50 font-light">About me</small>
          <p className="font-semibold text-white text-sm mt-1 mb-2 max-w-head">Experienced designer and developer remotely from Benin City, Nigeria.</p>
          <p className="font-light text-sm text-grey-100 max-w-text">I am a UI/UX Designer. An Expert Web App and Mobile App Development. A good 3D designer, model and character sculpting.  </p>
        </div>
      </div>
      <div className="flex-1 h-full bg-center"></div>
      <Hire />
    </div>
  );
}

export default Hero;