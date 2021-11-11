import Layout from "../components/layouts";
import Mini from "components/mini";
import Portfolios from "components/portfolios";
import Services from "components/services";
import Statists from "components/statists";
import Testimonials from "components/testimonials";
import Title from "components/title";
import Portfolio from "components/portfolio";

const HomePage = () => {
  return (
    <Layout>
      <Mini />
      <Title subTitle="Our service" title="What we offer" />
      <Services />
      <Title subTitle="Our portfolio" title="What we did!" />
      <Portfolios more={true}>
        <Portfolio reversed="flex-row" />
        <Portfolio reversed="flex-row-reverse" />
        <Portfolio reversed="flex-row" />
      </Portfolios>
      <Title subTitle="Our statists" title="What our statists say!" />
      <Statists />
      <Testimonials />
    </Layout>
  );
};

export default HomePage;