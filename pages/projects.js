import Navbar from "components/navbar";
import Title from "components/title";
import Portfolios from "../components/portfolios";
import Footer from "components/footer";
import Portfolio from "components/portfolio";
import Hire from "components/hire";
import axios from "axios";

const Projects = ({ projects }) => {
  return (
    <>
      <div className={"bg-purple-900 pl-8 pr-8"}>
        <Navbar />
        <Hire />
      </div>
      <Title subTitle="Our portfolio" title="What we did!" />
      <Portfolios more={false}>
        {projects.map(({id, name, description, image, link}, index) =>
          <Portfolio key={id} index={++index} title={name} desc={description} img={image} link={link} />
        )}
      </Portfolios>
      <Footer />
    </>
  );
}

export const getStaticProps = async ({ req, res }) => {
  const fetch = await axios.get(process.env.URL + 'projects');
  const { data: projects } = await fetch;

  return {
    props: { projects }
  }
}

export default Projects;