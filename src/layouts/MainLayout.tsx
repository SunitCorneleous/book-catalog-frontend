import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import PageContainer from '../components/shared/PageContainer';

const MainLayout = () => {
  return (
    <div className='bg-netural-100'>
      <Header />
      <PageContainer>
        <Outlet />
      </PageContainer>
      <Footer />
    </div>
  );
};

export default MainLayout;
