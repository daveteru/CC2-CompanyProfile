import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import "./index.css";
import Blogs_edit from "./pages/Blogs_edit";

const Home = lazy(() => import("./pages/Home"));
const Aboutus = lazy(() => import("./pages/Aboutus"));
const Services = lazy(() => import("./pages/Services"));
const Teams = lazy(() => import("./pages/Teams"));
const Blogs = lazy(() => import("./pages/Blogs"));
const Blogs_login = lazy(() => import("./pages/Blogs_login"));
const Blogs_create = lazy(() => import("./pages/Blogs_create"));
const Blogs_page = lazy(() => import("./pages/Blogs_page"));

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
  {
    path: "/editblog/:id",
    element: <Blogs_edit />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense>
      <RouterProvider router={router}></RouterProvider>
    </Suspense>
  </StrictMode>,
);
