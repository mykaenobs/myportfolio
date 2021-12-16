import Hero from './hero';

const Header = ({ children }) => {
  return (
    <header className="h-screen bg-hero pr-8 pl-8">
      {children}
      <Hero />
    </header>
  );
}

export default Header;