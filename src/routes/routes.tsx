import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AllBooksPage from "../pages/AllBooksPage";
import LoginPage from "../pages/LoginPage";
import AddNewBookPage from "../pages/AddNewBookPage";
import BookDetailsPage from "../pages/BookDetailsPage";
import SignUpPage from "../pages/SignUpPage";
import EditBookPage from "../pages/EditBookPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "all-books",
        element: <AllBooksPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "sign-up",
        element: <SignUpPage />,
      },
      {
        path: "add-new-book",
        element: <AddNewBookPage />,
      },
      {
        path: "/book-details/:id",
        element: <BookDetailsPage />,
      },
      {
        path: "/edit-book",
        element: <EditBookPage />,
      },
    ],
  },
]);

export default routes;
