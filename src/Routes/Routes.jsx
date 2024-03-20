import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main';
import Home from "../Pages/Home/Home";

import DisplayErrorPage from "../components/DisplayError/DisplayErrorPage";


const router = createBrowserRouter([
  {
      path: '/',
      element: <Main></Main>,
      errorElement: <DisplayErrorPage/> ,
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