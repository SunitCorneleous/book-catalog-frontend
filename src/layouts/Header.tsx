import { Link } from 'react-router-dom';

const Header = () => {
  const navLinks = [
    {
      name: 'All Books',
      path: '/all-books',
    },
    {
      name: 'Sign Up',
      path: '/sign-up',
    },
    {
      name: 'Login',
      path: '/login',
    },
  ];

  return (
    <div>
      <div className='flex h-40 md:max-w-full px-12 md:mx-auto items-center justify-between '>
        <div className=''>
          <h1 className='text-2xl font-bold text-primary'>
            <Link to={'/'}>Logo</Link>
          </h1>
        </div>

        <nav className='flex text-primary'>
          {navLinks.map((link, key) => (
            <Link
              to={link.path}
              key={key}
              className='text-xl pl-10 font-semibold cursor-pointer hover:font-extrabold'
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Header;
