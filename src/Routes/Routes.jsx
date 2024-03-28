import Main from "@/Layout/Main";
import DisplayError from "@/components/DisplayError";
import Home from "@/Pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import LogisticsServices from "@/Pages/Service/LogisticsServices";

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
        // element: ,
      },
      {
        path: '/service/ship-chandlery',
        // element: ,
      },
      {
        path: '/service/ship-repair',
        // element: ,
      },
      {
        path: '/service/ship-supply',
        // element: ,
      },
      {
        path: '/service/logistics-services',
        element: <LogisticsServices />,
      },
      {
        path: '/service/export-products-services',
        // element: ,
      },
      {
        path: '/contact-us',
        // element: ,
      },
    ],
  },
]);

export default router;
