import { createBrowserRouter } from "react-router";
import Header from "../components/Header";
import HomeLayOut from "../layout/HomeLayOut";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";


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
          loader: () => fetch("/news.json")
        }
      ]
    },
    {
      path: '/auth',
      element: <h2>Authentication Layout</h2>
    },
    {
      path: '/news',
      element: <h2>News layout</h2>
    },
    {
      path: '/*',
      element: <h2>Error 404</h2>
    }
  ]
)

export default router;