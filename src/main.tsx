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
import Blogs_login from "./Blogs_login";
import Blogs_create from "./Blogs_create";

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
  {
    path: "/blogs_admin_login",
    element: <Blogs_login />,
  },
  {
    path: "/blogscreate",
    element: <Blogs_create />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
