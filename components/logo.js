import Link from 'next/link';

const Logo = ({ pos }) => {
  switch (pos) {
    case 'menu':
      return <Link href="/">
        <a href="" className="visible text-red-100 text-xl font-bold md:invisible">Aenobs.</a>
      </Link>;
    case 'foot':
      return <Link href="/">
        <a href="" className="text-red-100 text-xl font-bold">Aenobs.</a>
      </Link>;
    default:
      return (
        <h1>
          <Link href="/">
            <a href="" className="text-white text-xl font-bold">Aenobs.</a>
          </Link>
        </h1>
      );
  }
};

const LogoTwo = () => {
  return (
    <Link href="/"><a href="" className="text-red-100 text-2xl font-bold">ae.</a></Link>
  );
};

const LogoThree = () => {
  return (
    <Link href="/"><a href="" className="visible text-red-100 text-2xl font-bold md:invisible">ae.</a></Link>
  );
};

export { Logo, LogoTwo, LogoThree };