import Main from "@/Layout/Main";
import Home from "@/Pages/Home/Home";
import AboutUs from "@/Pages/AboutUs/AboutUs";
import ContactUs from "@/Pages/ContactUs/ContactUs";
import { createBrowserRouter } from "react-router-dom";
import DisplayError from "@/components/DisplayError";
import ShipChandlery from "@/Pages/Services/ShipChandlery";
import ShipRepair from "@/Pages/Services/ShipRepair";
import LogisticService from "@/Pages/Services/LogisticService";
import ExportServices from "@/Pages/Services/ExportServices";
import ShipSupply from "@/Pages/Services/ShipSupply";

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
      // Services Routes ⤵
      {
        path: "/service/ship-supply",
        // element: <Service />,
      },
      {
        path: "/service/logistics-services",
        // element: <Service />,
      },
      {
        path: "/service/export-products-services",
        // element: <Service />,
      },
      {
        path: "/service/ship-chandlery",
        element: <ShipChandlery />,
      },
      {
        path: "/service/ship-repair",
        element: <ShipRepair />,
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
      {
        path: "/logisticService",
        element: <LogisticService/>,
      },
      {
        path: "/exportService",
        element: <ExportServices/>,
      },
      {
        path: "/shipSupply",
        element: <ShipSupply/>,
      },
    ],
  },
]);

export default router;
