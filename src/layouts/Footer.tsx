import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='h-auto pt-8'>
      <div className='h-[50px] bg-primary text-white flex justify-around items-center'>
        <h1 className='text-lg font-semibold'>Get connected with us</h1>

        <div className='flex'>
          <FaFacebook className='mr-3' size={21} />
          <FaTwitter className='mr-3' size={21} />
          <FaInstagram className='mr-3' size={21} />
        </div>
      </div>

      <div className='px-4 py-12 flex justify-around'>
        <div>
          <h3 className='text-lg font-semibold'>Contact Us</h3>
          <p>Phone: 123-456-7890</p>
          <p>Email: info@bookcatalog.com</p>
          <p>Address: 123 Main Street, City, State, ZIP</p>
        </div>
        <div>
          <h3 className='text-lg font-semibold'>Useful Links</h3>
          <p>About Us</p>
          <p>Services</p>
          <p>Investment Options</p>
        </div>
        <div>
          <h3 className='text-lg font-semibold'>Useful Links</h3>

          <p>Blog</p>
          <p>FAQ</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
