import React from "react";
import { HashRouter, RouterProvider } from "react-router-dom";
import router from "@/Routes/Routes";

function App() {
  return <RouterProvider router={router}></RouterProvider>;
  // return <HashRouter router={router}></HashRouter>;
}

export default App;
