import { createBrowserRouter } from "react-router";
import Header from "../components/Header";
import HomeLayOut from "../layout/HomeLayOut";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayOut from "../layout/AuthLayOut";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../pages/Loading";



const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <HomeLayOut></HomeLayOut>,
      children: [
        {
          path: '',
          element: <Home></Home>
        },
        {
          path: '/category/:id',
          element: <CategoryNews></CategoryNews>,
          loader: () => fetch("/news.json"),
          hydrateFallbackElement: <Loading></Loading>
        }
      ]
    },
    {
      path: '/auth',
      element: <AuthLayOut></AuthLayOut>,
      children: [
        {
          path: '/auth/login',
          element: <Login></Login>
        },
        {
          path: '/auth/register',
          element: <Register></Register>
        }
      ]
    },
    {
      path: '/news-details/:id',
      element: <PrivateRoute>
        <NewsDetails></NewsDetails>
      </PrivateRoute>,
      loader: () => fetch('/news.json'),
      hydrateFallbackElement: <Loading></Loading>
    },
    {
      path: '/*',
      element: <h2>Error 404</h2>
    }
  ]
)

export default router;