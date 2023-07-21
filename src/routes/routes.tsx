import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import AllBooksPage from '../pages/AllBooksPage';

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
    ],
  },
]);

export default routes;
