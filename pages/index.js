import Mini from "components/mini";
import Portfolios from "components/portfolios";
import Services from "components/services";
import Statists from "components/statists";
import Testimonials from "components/testimonials";
import Title from "components/title";

const HomePage = () => {
  return (
    <>
      <Mini />
      <Title subTitle="Our service" title="What we offer" />
      <Services />
      <Title subTitle="Our portfolio" title="What we did!" />
      <Portfolios />
      <Title subTitle="Our statists" title="What are statists say!" />
      <Statists />
      <Testimonials />
    </>
  );
};

export default HomePage;