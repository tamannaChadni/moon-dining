import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./component/Layout/MainLayout";
import Home from "./Pages/Home";
import ErrorPage from "./component/ErrorPage/ErrorPage";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import AuthProvider from "./Providers/AuthProvider";

import { HelmetProvider } from "react-helmet-async";

import MyList from "./component/MyList/MyList";
import FoodDetails from "./component/FoodDetails/FoodDetails";
import AllFood from "./Pages/AllFood/AllFood";
import PurchaseFood from "./Pages/PurchaseFood/PurchaseFood";
import Gallery from "./Pages/Gallery/Gallery";
import AddFood from "./Pages/AddFood/AddFood";
import OrderFood from "./Pages/OrderFood/OrderFood";
import UpdateFood from "./Pages/UpdateFood/UpdateFood";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch("food.json"),
      },
      

      {
        path: "/my-list",
        element: <MyList></MyList>,
      },
      {
        path: "/all-foods",
        element: <AllFood></AllFood>,
      },
      {
        path: "/food-details",
        element: <FoodDetails></FoodDetails>,
      },
      {
        path: "/purchase-food",
        element: <PurchaseFood></PurchaseFood>,
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/add-food",
        element: <AddFood></AddFood>,
      },
      {
        path: "/order-food",
        element: <OrderFood></OrderFood>,
      },
      {
        path: "/update-food",
        element: <UpdateFood></UpdateFood>,
      },

      {
        path: "/login",
        element: <Login></Login>,
        loader: () => fetch("food.json"),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </HelmetProvider>
    {/* <App /> */}
  </React.StrictMode>
);
