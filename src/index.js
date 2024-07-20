import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home";
import Wallet from "./Wallet";
import Profile from "./Profile";
import Header from "./Header";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const Appmaincomp = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Appmaincomp />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/wallet",
        element: <Wallet />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />);
