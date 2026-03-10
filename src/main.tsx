import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import Aboutus from "./Aboutus";
import Home from "./Home";
import "./index.css";
import Services from "./Services";
import Teams from "./Teams";
import Blogs from "./Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <Aboutus />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/teams",
    element: <Teams />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
