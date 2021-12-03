import Layout from "../components/layouts";
import Mini from "components/mini";
import Portfolios from "components/portfolios";
import Services from "components/services";
import Statists from "components/statists";
import Testimonials from "components/testimonials";
import Title from "components/title";
import Portfolio from "components/portfolio";
import axios from "axios";

const HomePage = ({ projects, testimonials, services }) => {
  return (
    <Layout>
      <Mini services={services} />
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
      <Testimonials testimonials={testimonials} />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const fetchOne = await axios.get(process.env.URL + 'projects');
  const { data: projects } = await fetchOne;

  const fetchTwo = await axios.get(process.env.URL + 'testimonials');
  const { data: testimonials } = await fetchTwo;

  const fetchThree = await axios.get(process.env.URL + 'services');
  const { data: services } = await fetchThree;

  return {
    props: {
      projects: projects.slice(0, 3),
      testimonials,
      services: services.slice(0, 5),
    }
  }
}

export default HomePage;