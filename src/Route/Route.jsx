import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import DashboardLayout from "../pages/DashboardLayout";
import EditProfile from "../pages/EditProfile/EditProfile";
import Home from "../pages/Home/Home";
import Product from "../pages/Product";
import Products from "../pages/Products/Products";
import Profile from "../pages/Profile/Profile";

const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
        loader: () => fetch(`https://dummyjson.com/products`)
      },
      {
        path: "/products/:CardId",
        element: <Product/>,
        loader: ({params}) => fetch(`https://dummyjson.com/products/${params.CardId}`)
      },
      {
        path: '/dashboard',
        element: <DashboardLayout/>,
        children: [
          {
            path: '/dashboard',
            element: <Dashboard/>
          },
          {
            path: '/dashboard/profile',
            element: <Profile/>
          },
          {
            path: '/dashboard/editProfile',
            element: <EditProfile/>
          },
        ]
      }
    ],
  },
]);

export default myCreatedRoute;
