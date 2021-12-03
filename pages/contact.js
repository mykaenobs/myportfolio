import Navbar from "components/navbar";
import Title from "components/title";
import Footer from "components/footer";
import {BtnContact} from "components/buttons";
import ContactForm from "components/contactForm";
import axios from 'axios';
import Modal from 'components/modal';
import { useState } from 'react';

const Contact = ({ services }) => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <div className={"bg-purple-900 pl-8 pr-8"}>
        <Navbar />
      </div>
      <Title subTitle="Contact Us" title="Get in touch with us!" />
      <BtnContact />
      <ContactForm setModal={setModal} services={services} />
      <Footer />
      {modal && (<Modal />)}
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