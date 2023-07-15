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
          <h1 className='text-4xl font-bold text-primary-100'>Logo</h1>
        </div>

        <nav className='flex text-primary-100'>
          {navLinks.map(link => (
            <p className='text-2xl pl-16 font-semibold cursor-pointer hover:font-extrabold'>
              {link.name}
            </p>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Header;
