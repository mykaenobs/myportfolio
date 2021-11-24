import { BtnSolid } from "./buttons";
const Portfolios = ({ more, children }) => {
  return (
    <section className="relative pr-8 pl-8">
      {children}
      <BtnSolid more={more} />
    </section>
  );
}

export default Portfolios;