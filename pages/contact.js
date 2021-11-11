import Navbar from "components/navbar";
import Title from "components/title";
import Footer from "components/footer";
import Hire from "components/hire";
import {BtnContact} from "components/buttons";
import ContactForm from "components/contactForm";

const Contact = () => {
  return (
    <>
      <div className={"bg-purple-900 pl-8 pr-8"}>
        <Navbar />
        <Hire />
      </div>
      <Title subTitle="Contact Us" title="Get in touch with us" />
      <BtnContact />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;