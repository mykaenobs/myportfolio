import Link from 'next/link';

const Mini = () => {
  return (
    <section className="bg-purple-900 pl-8 pr-8">
      <div className="pt-8 pb-8 flex gap-8 md:gap-4 flex-col items-center text-white text-opacity-50 text-sm font-light md:justify-between md:flex-row  lg:max-w-container lg:mr-auto lg:ml-auto">
        <div>
          <Link href="#">
            <a className="flex items-center gap-4 flex-col md:flex-row">
              <span className="inline-block w-6 h-6 bg-red-200"></span>
              <span>Web App Development</span>
            </a>
          </Link>
        </div>
        <div>
          <Link href="#">
            <a className="flex items-center gap-4 flex-col md:flex-row">
              <span className="inline-block w-6 h-6 bg-red-200"></span>
              <span>UI/UX Design</span>
            </a>
          </Link>
        </div>
        <div>
          <Link href="#">
            <a className="flex items-center gap-4 flex-col md:flex-row">
              <span className="inline-block w-6 h-6 bg-red-200"></span>
              <span>Applications</span>
            </a>
          </Link>
        </div>
        <div>
          <Link href="#">
            <a className="flex items-center gap-4 flex-col md:flex-row">
              <span className="inline-block w-6 h-6 bg-red-200"></span>
              <span>Problem Solving</span>
            </a>
          </Link>
        </div>
        <div>
          <Link href="#">
            <a className="flex items-center gap-4 flex-col md:flex-row">
              <span className="inline-block w-6 h-6 bg-red-200"></span>
              <span>SEO system</span>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
export default Mini;