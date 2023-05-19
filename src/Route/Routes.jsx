import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Addtoy from "../pages/Home/AddToy/Addtoy";
import Blog from "../pages/Home/Blog/Blog";
import Home from "../pages/Home/Home/Home";
import Login from "../shared/Login/Login";
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
  