import Navbar from "components/navbar";
import Title from "components/title";
import Footer from "components/footer";
import Hire from "components/hire";
import {BtnContact} from "components/buttons";
import ContactForm from "components/contactForm";
import axios from 'axios';

const Contact = ({ services }) => {
  return (
    <>
      <div className={"bg-purple-900 pl-8 pr-8"}>
        <Navbar />
        {/*<Hire />*/}
      </div>
      <Title subTitle="Contact Us" title="Get in touch with us" />
      <BtnContact />
      <ContactForm services={services} />
      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
  const fetch = await axios.get( process.env.URL + 'services');
  const { data: services } = await fetch;

  return {
    props: { services: services.reverse() }
  }
}

export default Contact;