import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import TakeTest from "./Pages/TakeTest/index";
import "./App.css";
import Payment from "./Pages/Payment/Payment";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/takeTest",
      element: <TakeTest />,
    },
    {
      path: "/Payment",
      element: <Payment />,
    },


  ]);

  return <RouterProvider router={router} />;
}

export default App;
