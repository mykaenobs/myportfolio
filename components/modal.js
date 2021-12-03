import { FaRegCheckCircle } from 'react-icons/fa';

const Modal = () => {
  return (
    <section className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-2xl rounded-xl bg-red-100 w-52 h-40 grid place-content-center">
      <center><FaRegCheckCircle className="text-white text-opacity-60" size={60}/></center>
      <p className="text-white text-xl font-extralight mt-2.5">Message Sent</p>
    </section>
  );
};

export  default Modal;