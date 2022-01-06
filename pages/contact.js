import Navbar from 'components/navbar';
import Title from 'components/title';
import Footer from 'components/footer';
import { BtnContact } from 'components/buttons';
import ContactForm from 'components/contactForm';
import axios from 'axios';
import Modal from 'components/modal';
import useStore from '@store/index';
import { useEffect } from 'react';
import Head from 'next/head';

const Contact = ({ services }) => {
  const modal = useStore(state => state.modal);

  return (
    <>
      <Head>
        <title>Our contact page - ae.</title>
      </Head>
      <div className={'bg-purple-900 pl-8 pr-8'}>
        <Navbar />
      </div>
      <Title subTitle="Contact Us" title="Get in touch with us!" />
      <BtnContact />
      {/*<ContactForm services={services} />*/}
      <Footer />
      {modal && (<Modal />)}
    </>
  );
};

export const getServerSideProps = async () => {
  const fetch = await axios.get(process.env.URL + 'services');
  const { data: services } = await fetch;

  return {
    props: { services: services }
  };
};

export default Contact;