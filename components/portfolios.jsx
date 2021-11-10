import Link from 'next/link';
import Portfolio from "./portfolio";

const Portfolios = () => {
  return (
    <section className="pr-8 pl-8">
      <Portfolio reversed="flex-row" />
      <Portfolio reversed="flex-row-reverse" />
      <Portfolio reversed="flex-row" />

      <div className="mt-28 flex gap-8 items-center justify-center">
        <hr className="border-grey-100 w-80" />
        <Link href="#"><a className="p-3 pl-5 pr-5 bg-red-200 text-white rounded-xl text-sm whitespace-nowrap">More Works</a></Link>
        <hr className="border-grey-100 w-80" />
      </div>
    </section>
  );
}

export default Portfolios;