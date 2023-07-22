import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import AllBooksPage from '../pages/AllBooksPage';
import LoginPage from '../pages/LoginPage';
import AddNewBookPage from '../pages/AddNewBookPage';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'all-books',
        element: <AllBooksPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'add-new-book',
        element: <AddNewBookPage />,
      },
    ],
  },
]);

export default routes;
