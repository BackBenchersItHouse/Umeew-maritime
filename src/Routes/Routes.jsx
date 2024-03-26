import Main from "@/Layout/Main";
import DisplayError from "@/components/DisplayError";
import Home from "@/Pages/Home/Home";
import AboutUs from "@/Pages/AboutUs/AboutUs";
import Service from "@/Pages/Service/Service";
import Blog from "@/Pages/Blog/Blog";
import ContactUs from "@/Pages/ContactUs/ContactUs";
import { createBrowserRouter } from "react-router-dom";

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
        path: '/service/ship-chandlery',
        element: <Service />
      },
      {
        path: '/service/ship-repair',
        element: <Service />
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
        path: '/contact-us',
        element: <ContactUs />
      },
    ],
  },
]);

export default router;
