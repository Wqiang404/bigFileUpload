import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import Layout from "../page/Layout";
import Home from "../page/Home";
import Counter from "../page/counter/Counter";
import About from "../page/About";
import Dashboard from "../page/Dashboard";
import NoMatch from "../page/NoMatch";

export const rootRouter: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
  {
    element: <Layout />,
    children: [
      {
        path: "counter",
        element: <Counter />,
      },
    ],
  },
  {
    element: <Layout />,
    children: [
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    element: <Layout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "*",
    element: <Layout />,
    children: [
      {
        path: "*",
        element: <NoMatch />,
      },
    ],
  },
];

const Router = () => {
  const routes = useRoutes(rootRouter);
  return routes;
};

export default Router;
