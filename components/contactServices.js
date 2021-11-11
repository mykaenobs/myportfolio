const ContactServices = () => {
  return (
    <div className="mt-10 md:mr-auto md:ml-auto md:max-w-container">
      <p className="text-sm font-semibold text-grey-800">Services</p>

      <div className="flex gap-4 flex-wrap mt-5 font-light text-sm text-grey-800">
        <p className="bg-grey-400 border-2 border-grey-100 p-2 pl-6 pr-6 rounded-xl hover:bg-red-100 hover:text-white cursor-pointer">Web Design</p>
        <p className="bg-grey-400 border-2 border-grey-100 p-2 pl-6 pr-6 rounded-xl hover:bg-red-100 hover:text-white cursor-pointer">UI/UX Design</p>
        <p className="bg-grey-400 border-2 border-grey-100 p-2 pl-6 pr-6 rounded-xl hover:bg-red-100 hover:text-white cursor-pointer">Web Development</p>
        <p className="bg-grey-400 border-2 border-grey-100 p-2 pl-6 pr-6 rounded-xl hover:bg-red-100 hover:text-white cursor-pointer">Mobile App Development</p>
        <p className="bg-grey-400 border-2 border-grey-100 p-2 pl-6 pr-6 rounded-xl hover:bg-red-100 hover:text-white cursor-pointer">SEO System</p>
        <p className="bg-grey-400 border-2 border-grey-100 p-2 pl-6 pr-6 rounded-xl hover:bg-red-100 hover:text-white cursor-pointer">Graphics Design</p>
      </div>
    </div>
  );
}

export default ContactServices;