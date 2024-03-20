import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main';
import DisplayError from '../components/DisplayError/DisplayError';
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
      path: '/',
      element: <Main></Main>,
      errorElement: <DisplayError></DisplayError>,
      children: [
          {
              path: '/',
              element: <Home></Home>
          },
        //   {
        //       path: '/login',
        //       element: <Login></Login>
        //   },
        //   {
        //       path: '/about-us',
        //       element: <AboutUs></AboutUs>
        //   },
        //   {
        //       path: '/appointment',
        //       element: <Service></Service>
        //   }
      ]
  },
]);

export default router;