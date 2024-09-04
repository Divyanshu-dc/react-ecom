import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Profile from "./Components/Profile.jsx";
import Cart from "./Components/Cart.jsx";
import Home from "./Components/Home.jsx";
import { Suspense, lazy } from "react";
import Shimmer from "./Components/Shimmer.jsx";
import ProductPage from "./Components/ProductPage.jsx";
import ErrorPage from "./Components/ErrorPage.jsx";
import Store from "./Store/Store.js"
import {Provider} from "react-redux"
import ContextAPI from "./Components/ContextAPI.jsx";


import Food from "./Components/Food.jsx";
import Checkout from "./Components/CheckOut.jsx";
const About = lazy(() => import("./Components/About.jsx"));

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },{
        path: "/checkout",
        element: <Checkout></Checkout>,
      },
      {
        path : "/food-delivery",
        element: <Food></Food>
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={Shimmer}>
            <About></About>
          </Suspense>
        ),
      },
      {
        path: "/product/:id",
        element: <ProductPage></ProductPage>,
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
  <ContextAPI>
    <RouterProvider router={AppRouter}></RouterProvider>
  </ContextAPI>
  </Provider>
);
