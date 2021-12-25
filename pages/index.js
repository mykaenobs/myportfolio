import Head from 'next/head';
import Layout from '../components/layouts';
import Mini from 'components/mini';
import Portfolios from 'components/portfolios';
import Services from 'components/services';
import Statists from 'components/statists';
import Testimonials from 'components/testimonials';
import Title from 'components/title';
import Portfolio from 'components/portfolio';
import axios from 'axios';
import useStore from '@store/index';
import { useEffect } from 'react';

const HomePage = (props) => {
  const state = useStore(state => state.services);

  useEffect(() => {
    useStore.setState({ services: props.services });
    useStore.setState({ testimonials: props.testimonials });
    useStore.setState({ projects: props.projects });
    useStore.setState({ statics: props.statics });
  }, []);

  return (
    <>
      <Head>
        <title>Myka Enobs - ae.</title>
      </Head>
      <Layout>
        <Mini />
        <Title subTitle="Our service" title="What we offer" section="services" />
        <Services />
        <Title subTitle="Our portfolio" title="What we did!" />
        <Portfolios more={true}>
          {props.projects.map(({ id, name, description, image, link }, index) =>
            <Portfolio key={id} index={++index} title={name} desc={description} img={image} link={link} />
          )}
        </Portfolios>
        <Title subTitle="Our statists" title="What our statists say!" section="stats" />
        <Statists />
        <Testimonials />
      </Layout>
    </>
  );
};

export const getServerSideProps = async () => {
  const fetchOne = await axios.get(process.env.URL + 'projects');
  const { data: projects } = await fetchOne;

  const fetchTwo = await axios.get(process.env.URL + 'testimonials');
  const { data: testimonials } = await fetchTwo;

  const fetchThree = await axios.get(process.env.URL + 'services');
  const { data: services } = await fetchThree;

  const fetchFour = await axios.get(process.env.URL + 'statics');
  const { data: statics } = await fetchFour;

  return {
    props: {
      projects: projects.slice(0, 3),
      testimonials,
      services: services.slice(0, 5),
      statics
    }
  };
};

export default HomePage;