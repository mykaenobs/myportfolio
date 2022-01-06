import { RiGenderlessLine } from 'react-icons/ri';
import { MdAlternateEmail } from 'react-icons/md';
import { BsPhone } from 'react-icons/bs';
import ContactServices from './contactServices';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import axios from 'axios';
import * as yup from 'yup';
import useStore from '@store/index';

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.number().typeError('phone must be a number').positive(),
  description: yup.string().required('a little bit of project description will be helpful :)')
}).required();

const ContactForm = ({ services }) => {
  const [service, setService] = useState([]);
  const [clear, setClear] = useState(false);
  const modal = useStore(state => state.modal);

  const button = useRef();

  const { register, handleSubmit, reset, formState: { errors: { name, email, phone, description } } } = useForm({
    resolver: yupResolver(schema)
  });

  const send = async (data) => {
    const fetch = await axios.post(process.env.NEXT_PUBLIC_URL + 'contacts', { ...data, serviceId: service });
    const { data: { created } } = await fetch;
    if (created) modalControl();
  };

  const modalControl = () => {
    reset();
    useStore.setState({ modal: !modal });
    setService([]);
    setClear(!clear);
    setTimeout(() => useStore.setState({ modal: false }), 3000);
  };

  return (
    <>
      <form className="mt-20 pr-8 pl-8" onSubmit={handleSubmit(send)}>
        <div
          className="flex flex-wrap flex-col gap-y-7 md:flex-row md:gap-x-8 md:mr-auto md:ml-auto md:max-w-container">
          <div className="flex-1">
            <div className="text-grey-800">
              <label htmlFor="name" className="font-medium text-sm">Your Name</label>
              {name && <span className="text-brick text-sm font-light">* {name.message}</span>}
              <div className="flex items-center relative">
                <span className="border-grey-300 border-2 rounded-l border-r-0 h-12 grid place-content-center p-3">
                  <RiGenderlessLine />
                </span>
                <input
                  type="text"
                  className="border-2 border-l-0 border-grey-300 rounded-r outline-none w-full text-sm font-light p-3 pl-0"
                  placeholder={'eg john doe'}
                  {...register('name')}
                />
              </div>
            </div>
            <div className="text-grey-800 mt-5">
              <label htmlFor="email" className="font-medium text-sm">Email</label>
              {email && <span className="text-brick text-sm font-light">* {email.message}</span>}
              <div className="flex items-center relative">
                <span className="border-grey-300 border-2 rounded-l border-r-0 h-12 grid place-content-center p-3">
                  <MdAlternateEmail />
                </span>
                <input
                  type="email"
                  className="border-2 border-l-0 border-grey-300 rounded-r outline-none w-full text-sm font-light p-3 pl-0"
                  id="email"
                  placeholder={'eg john@doe.com'}
                  {...register('email')}
                />
              </div>
            </div>
            <div className="text-grey-800 mt-5">
              <label htmlFor="phone" className="font-medium text-sm">Phone</label>
              {phone && <span className="text-brick text-sm font-light">* {phone.message}</span>}
              <div className="flex items-center relative">
                <span className="border-grey-300 border-2 rounded-l border-r-0 h-12 grid place-content-center p-3">
                  <BsPhone />
                </span>
                <input
                  type="text"
                  className="border-2 border-l-0 border-grey-300 rounded-r outline-none w-full text-sm font-light p-3 pl-0"
                  id="phone"
                  placeholder={'eg +234802347784'}
                  {...register('phone', { valueAsNumber: true })}
                />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="text-grey-800 flex flex-col gap-1 h-full">
              <div>
                <label htmlFor="description" className="font-medium text-sm">Project Description</label>
                {description && <span className="text-brick text-sm font-light">* {description.message}</span>}
              </div>
              <textarea
                className="border-2 border-grey-300 rounded outline-none w-full h-60 text-sm font-light p-3 md:flex-1 resize-none"
                id="description"
                placeholder={'Describe your project here...'}
                {...register('description')}
              />
            </div>
          </div>
        </div>
        <ContactServices services={services} setService={setService} service={service} clear={clear} />

        <div className="flex justify-center mt-16">
          <input type="submit" ref={button} className="p-3 pl-5 pr-5 bg-red-200 text-white rounded text-sm"
                 value="Send Message" />
        </div>
      </form>
    </>
  );
};

export default ContactForm;