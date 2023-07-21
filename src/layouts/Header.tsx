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
          <h1 className='text-2xl font-bold text-primary'>Logo</h1>
        </div>

        <nav className='flex text-primary'>
          {navLinks.map((link, key) => (
            <p
              key={key}
              className='text-xl pl-10 font-semibold cursor-pointer hover:font-extrabold'
            >
              {link.name}
            </p>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Header;
