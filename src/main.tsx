import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import Aboutus from "./pages/Aboutus";
import Home from "./pages/Home";
import "./index.css";
import Services from "./pages/Services";
import Teams from "./pages/Teams";
import Blogs from "./pages/Blogs";
import Blogs_login from "./pages/Blogs_login";
import Blogs_create from "./pages/Blogs_create";
import Blogs_page from "./pages/Blogs_page";
import Backendless from "backendless";

Backendless.initApp(
  import.meta.env.VITE_APP_ID,
  import.meta.env.VITE_API_KEY
);


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
  {
    path: "/blogspage/:id",
    element: <Blogs_page />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
