import Navbar from "components/navbar";
import Title from "components/title";
import Portfolios from "../components/portfolios";
import Footer from "components/footer";
import Portfolio from "components/portfolio";
import Hire from "components/hire";

const Projects = () => {
  return (
    <>
      <div className={"bg-purple-900 pl-8 pr-8"}>
        <Navbar />
        <Hire />
      </div>
      <Title subTitle="Our portfolio" title="What we did!" />
      <Portfolios more={false}>
        <Portfolio reversed="flex-row" />
        <Portfolio reversed="flex-row-reverse" />
        <Portfolio reversed="flex-row" />
        <Portfolio reversed="flex-row-reverse" />
        <Portfolio reversed="flex-row" />
        <Portfolio reversed="flex-row-reverse" />
        <Portfolio reversed="flex-row" />
        <Portfolio reversed="flex-row-reverse" />
        <Portfolio reversed="flex-row" />
        <Portfolio reversed="flex-row-reverse" />
      </Portfolios>
      <Footer />
    </>
  );
}

export default Projects;