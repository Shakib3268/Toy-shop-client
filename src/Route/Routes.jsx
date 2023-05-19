import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Addtoy from "../pages/Home/AddToy/Addtoy";
import Blog from "../pages/Home/Blog/Blog";
import Home from "../pages/Home/Home/Home";
import AllToy from "../shared/All toy/AllToy";
import Login from "../shared/Login/Login";
import MyToy from "../shared/My Toy/MyToy";
import Register from "../shared/Register/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'alltoy',
          element: <AllToy></AllToy>
        },
        {
          path: 'mytoy',
          element:<MyToy></MyToy>
        },
        {
            path: 'addtoy',
            element:<Addtoy></Addtoy>
        },
        {
            path: 'blog',
            element:<Blog></Blog>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        }
      ]
    },
  ]);

  export default router
  