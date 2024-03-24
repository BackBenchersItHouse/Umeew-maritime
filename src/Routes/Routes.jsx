import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Service from "../Pages/Service/Service";
import Blog from "../Pages/Blog/Blog";
import ContactUs from "../Pages/ContactUs/ContactUs";
import DisplayError from "@/components/DisplayError";
import AboutUs from "@/Pages/AboutUs/AboutUs";

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
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
    ],
  },
]);

export default router;
