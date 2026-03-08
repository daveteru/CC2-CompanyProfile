import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import "./index.css";
import Home from "./Home";
import Services from "./Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
    {
    path: "/services",
    element: <Services/>,
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
