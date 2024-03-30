import Main from "@/Layout/Main";
import Home from "@/Pages/Home/Home";
import AboutUs from "@/Pages/AboutUs/AboutUs";
import ContactUs from "@/Pages/ContactUs/ContactUs";
import { createBrowserRouter } from "react-router-dom";
import DisplayError from "@/components/DisplayError";
import ShipChandlery from "@/Pages/Services/ShipChandlery";
import ShipRepair from "@/Pages/Services/ShipRepair";
import ShipSupply from "@/Pages/Services/ShipSupply";
import Logistics from "@/Pages/Services/Logistics";
import ShipChandlery from "@/Pages/Services/ShipChandlery";
import ShipSupply from "@/Pages/Services/ShipSupply";
import ShipRepair from "@/Pages/Services/ShipRepair";
import ExportProducts from "@/Pages/Services/ExportProducts";

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
        path: '/service/ship-chandlery',
        element: <ShipChandlery />,
      },
      {
        path: '/service/ship-repair',
        element: <ShipRepair />,
      },
      {
        path: '/service/ship-supply',
        element: <ShipSupply />,
      },
      {
        path: "/service/logistics",
        element: <Logistics />,
      },
      {
        path: '/service/export-products',
        element: <ExportProducts />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
    ],
  },
]);

export default router;
