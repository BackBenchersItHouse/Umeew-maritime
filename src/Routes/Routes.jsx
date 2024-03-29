import Main from "@/Layout/Main";
import DisplayError from "@/components/DisplayError";
import Home from "@/Pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";
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
        path: '/about-us',
        // element: ,
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
        path: '/service/logistics',
        element: <Logistics />,
      },
      {
        path: '/service/export-products',
        element: <ExportProducts />,
      },
      {
        path: '/contact-us',
        // element: ,
      },
    ],
  },
]);

export default router;
