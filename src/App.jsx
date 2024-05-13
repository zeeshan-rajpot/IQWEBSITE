import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import TakeTest from "./Pages/TakeTest/index";
import "./App.css";

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
  ]);

  return <RouterProvider router={router} />;
}

export default App;
