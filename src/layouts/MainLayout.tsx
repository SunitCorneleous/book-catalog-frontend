import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
  return (
    <div className='bg-netural-100'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
