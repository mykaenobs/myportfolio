import Layout from "../components/layouts";
import Mini from "components/mini";
import Portfolios from "components/portfolios";
import Services from "components/services";
import Statists from "components/statists";
import Testimonials from "components/testimonials";
import Title from "components/title";
import Portfolio from "components/portfolio";
import axios from "axios";

const HomePage = ({ projects, services }) => {
  return (
    <Layout>
      <Mini />
      <Title subTitle="Our service" title="What we offer" section="services" />
      <Services />
      <Title subTitle="Our portfolio" title="What we did!" />
      <Portfolios more={true}>
        {projects.map(({id, name, description, image, link}, index) =>
          <Portfolio key={id}  index={++index} title={name} desc={description} img={image} link={link} />
        )}
      </Portfolios>
      <Title subTitle="Our statists" title="What our statists say!" section="stats" />
      <Statists />
      <Testimonials />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const fetch = await axios.get(process.env.URL + 'projects');
  const { data: projects } = await fetch;

  return {
    props: {
      projects: projects.slice(0, 3)
    }
  }
}

export default HomePage;