import Main from "@/Layout/Main";
import Home from "@/Pages/Home/Home";
import AboutUs from "@/Pages/AboutUs/AboutUs";
import Blog from "@/Pages/Blog/Blog";
import ContactUs from "@/Pages/ContactUs/ContactUs";
import { createBrowserRouter } from "react-router-dom";
import DisplayError from '@/components/DisplayError';
import ShipChandlery from "@/Pages/Services/ShipChandlery";
import ShipRepair from "@/Pages/Services/ShipRepair";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <DisplayError/>,
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
        path: '/service/ship-supply',
        element: <Service />
      },
      {
        path: '/service/logistics-services',
        element: <Service />
      },
      {
        path: '/service/export-products-services',
        element: <Service />
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/shipChandlery",
        element: <ShipChandlery/>,
      },
      {
        path: "/shipRepair",
        element: <ShipRepair/>,
      },
    ],
  },
]);

export default router;
