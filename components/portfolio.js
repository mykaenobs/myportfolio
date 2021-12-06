import Link from 'next/link';
import Image from 'next/image';

const Portfolio = ({index, title, desc, img, link}) => {
  const image = `${process.env.NEXT_PUBLIC_URL}projects/files/${img}`;

  return (
    <section className="max-w-wrapper ml-auto mr-auto mt-32 flex justify-between flex-col h-30 md:even:flex-row-reverse md:items-center gap-x-32 gap-y-10 md:mt-20 md:flex-row">
      <div className="bg-grey-100 flex-1 relative">
        <div className="transform rotate-6 w-full h-full bg-red-200">
          <Image src={image} blurDataURL={image} placeholder={'blur'} className="transform" alt="Project one" layout="responsive" width={200} height={120} />
        </div>
      </div>
      <div className="flex-1">
        <small className="flex items-center gap-2 text-red-100">
          <hr className="border-red-100 w-4" />
          <span>Project {index}</span>
        </small>
        <h1 className="text-grey-900 text-2xl font-semibold mt-2 mb-2">{title}</h1>
        <p className="text-sm text-grey-200 font-light">{desc}</p>
        <Link href={"https://" + link}><a className="text-red-200 text-xs inline-block mt-2">Checkout Project</a></Link>
      </div>
    </section>
  );
}

export default Portfolio;