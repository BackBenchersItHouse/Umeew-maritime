import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main';
import DisplayError from '../components/DisplayError';
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
      path: '/',
      element: <Main></Main>,
      errorElement: <DisplayError></DisplayError>,
      children: [
          {
              path: '/',
              element: <Home />
          },
          // {
          //     path: '/about-us',
          //     element: <AboutUs />
          // },
          // {
          //     path: '/service',
          //     element: <Service />
          // },
          // {
          //     path: '/blog',
          //     element: <Blog />
          // }
      ]
  },
]);

export default router;