import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import Testimonial from "./testimonial";

const Testimonials = () => {
  return (
    <section className="pr-8 pl-8 flex max-w-container flex-col gap-14 md:flex-row mr-auto ml-auto mt-48">

      <hgroup className="flex-1">
        <h6 className="text-grey-200 font-extralight capitalize text-xl">Our Testimonials</h6>
        <hr className="border-grey-200 w-28 mt-2 mb-2 ml-1 border-opacity-25" />
        <h1 className="uppercase text-grey-900 text-4xl font-semibold">What people say about us.</h1>
        <a id="testimonials"></a>

        <div className="flex gap-2 mt-20">
          <span className="w-3 h-3 bg-red-100 rounded-full"></span>
          <span className="w-3 h-3 bg-grey-100 rounded-full"></span>
          <span className="w-3 h-3 bg-grey-100 rounded-full"></span>
        </div>
      </hgroup>
      <div className="flex-1 w-full md:w-60">
        {/*<Testimonial desc="This is my description" name="Myka Enobs" pos="CEO of Figma" num="1"  />*/}
        <Swiper slidesPerView={1} spaceBetween={50}>
          <SwiperSlide>
            <Testimonial desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus illum quas ullam voluptatibus? Consequuntur culpa dolore tenetur. Architecto, optio?" name="Myka Enobs" pos="CEO of Figma" num="1"  />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonial desc="This is my description" name="Myka Enobs" pos="CEO of Figma" num="2"  />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;