import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="mt-40 bg-grey-100">
      <div className="max-w-container ml-auto mr-auto flex items-center justify-between pt-8 pb-8 flex-col gap-y-6 md:flex-row">
        <div className="w-8 h-8 bg-grey-200"><span></span></div>
        <p className="font-light text-grey-900 text-sm">&copy; 2021 Myka Enobs. All rights reserved.</p>
        <div className="flex gap-8 text-white">
          <Link href="#">
            <a className="w-10 h-10 bg-red-100 rounded-md inline-flex items-center justify-center text-2xl"> <FaFacebookF /></a>
          </Link>
          <Link href="#">
            <a className="w-10 h-10 bg-red-100 rounded-md inline-flex items-center justify-center text-2xl"> <FaWhatsapp /></a>
          </Link>
          <Link href="#">
            <a className="w-10 h-10 bg-red-100 rounded-md inline-flex items-center justify-center text-2xl"> <FaTwitter /></a>
          </Link>
          <Link href="#">
            <a className="w-10 h-10 bg-red-100 rounded-md inline-flex items-center justify-center text-2xl"> <FaInstagram /></a>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;