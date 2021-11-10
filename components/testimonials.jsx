
const Testimonials = () => {
  return (
    <section className="pr-8 pl-8 flex max-w-container flex-col gap-14 md:flex-row mr-auto ml-auto mt-48">
      <hgroup className="flex-1">
        <h6 className="text-grey-200 font-extralight capitalize text-xl">Our Testimonials</h6>
        <hr className="border-grey-200 w-28 mt-2 mb-2 ml-1 border-opacity-25" />
        <h1 className="uppercase text-grey-900 text-4xl font-semibold">What people say about us.</h1>

        <div className="flex gap-2 mt-20">
          <span className="w-3 h-3 bg-red-100 rounded-full"></span>
          <span className="w-3 h-3 bg-grey-100 rounded-full"></span>
          <span className="w-3 h-3 bg-grey-100 rounded-full"></span>
        </div>
      </hgroup>
      <div className="flex-1">
        <div className="bg-white shadow-2xl rounded-2xl p-10 relative">
          <span className="block w-16 h-16 bg-grey-100 rounded-full absolute -top-6 -left-6"></span>
          <p className="text-sm text-grey-900 font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere aliquam dicta, perspiciatis ullam laborum fugit suscipit repellendus placeat odit natus vitae modi nam corrupti praesentium similique nemo. Ducimus, nesciunt eos.</p>
          <strong className="block mt-4 text-red-200 text-sm font-medium">Myka Enobs</strong>
          <small className="text-grey-200">CEO of Figma</small>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;