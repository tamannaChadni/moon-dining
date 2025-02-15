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


import FoodDetails from "./component/FoodDetails/FoodDetails";
import AllFood from "./Pages/AllFood/AllFood";
import PurchaseFood from "./Pages/PurchaseFood/PurchaseFood";
import Gallery from "./Pages/Gallery/Gallery";
import AddFood from "./Pages/AddFood/AddFood";
import OrderFood from "./Pages/OrderFood/OrderFood";
import UpdateFood from "./Pages/UpdateFood/UpdateFood";
import AddedFoodItem from "./Pages/AddedFoodItem/AddedFoodItem";
import AddGalleryInfo from "./Pages/Gallery/AddGalleryInfo";
import PrivateRoute from "./component/Route/PrivateRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        // loader: () => fetch("food.json"),
        // loader: () => fetch("https://moon-dining-server.vercel.app/foods"),
        loader: () => fetch("http://localhost:5000/foods"),
      },
      

      
      {
        path: "/all-foods",
        element: <AllFood></AllFood>,
        // loader: () => fetch("https://moon-dining-server.vercel.app/foods"),
        loader: () => fetch('http://localhost:5000/foods'),
      },
      
      {
        path: "/foods/:_id",
        element:<PrivateRoute> <FoodDetails></FoodDetails></PrivateRoute>,
        // loader: ({ params }) => fetch(`https://moon-dining-server.vercel.app/foods/${params._id}`),
        loader: ({ params }) => fetch(`http://localhost:5000/foods/${params._id}`),
      },
      {
        path: "/addedFood",
        element:<PrivateRoute> <AddedFoodItem></AddedFoodItem></PrivateRoute>
        
      },
      {
        path: "/purchase/:_id",
        element: <PurchaseFood></PurchaseFood>,
        loader: ({ params }) => fetch(`https://moon-dining-server.vercel.app/foods/${params._id}`),
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
        loader: () => fetch("https://moon-dining-server.vercel.app/gallery"),
      },
      {
        path: "/gallery-info",
        element: <AddGalleryInfo></AddGalleryInfo>,
      },
      {
        path: "/add-food",
        element: <AddFood></AddFood>,
      },
      {
        path: "/order-food",
        element:<PrivateRoute> <OrderFood></OrderFood></PrivateRoute>,
        loader: () => fetch("https://moon-dining-server.vercel.app/purchase"),
      },
      {
        path: "/update-food/:_id",
        element: <UpdateFood></UpdateFood>,
        loader: ({ params }) => fetch(`https://moon-dining-server.vercel.app/foods/${params._id}`),
      },

      {
        path: "/login",
        element: <Login></Login>,
        loader: () => fetch("https://moon-dining-server.vercel.app/"),
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
