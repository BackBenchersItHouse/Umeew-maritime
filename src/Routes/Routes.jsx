import { createBrowserRouter } from "react-router-dom";
<<<<<<< HEAD
import Main from '../Layout/Main';
import Home from "../Pages/Home/Home";
import DisplayError from './../Components/DisplayError/DisplayError';
=======
import Main from "../Layout/Main";
import DisplayError from "../components/DisplayError";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Service from "../Pages/Service/Service";
import Blog from "../Pages/Blog/Blog";
import ContactUs from "../Pages/ContactUs/ContactUs";
>>>>>>> 2bb70e774bf47bf8c6781b1040c319256f0fbdeb

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <DisplayError />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: '/about-us',
        element: <AboutUs />
      },
      {
        path: '/service',
        element: <Service />
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/contact-us',
        element: <ContactUs />
      },
    ],
  },
]);

export default router;
