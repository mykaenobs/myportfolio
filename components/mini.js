import Link from 'next/link';
import useStore from '@store/index';

const Mini = () => {
  const services = useStore(state => state.services);

  return (
    <section className="bg-purple-900 pl-8 pr-8">
      <div className="pt-8 pb-8 flex gap-8 md:gap-4 flex-col items-center text-white text-opacity-50 text-sm font-light md:justify-between md:flex-row  lg:max-w-container lg:mr-auto lg:ml-auto">
        {services && services.map(({ id, name }) => (
          <div key={id}>
            <Link href="#">
              <a className="flex items-center gap-4 flex-col md:flex-row">
                <span className="inline-block w-6 h-6 bg-red-200"></span>
                <span>{name}</span>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Mini;