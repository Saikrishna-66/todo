import { createBrowserRouter } from "react-router";
import Signup from "../pages/signup/Signup";
import Signin from "../pages/signin/Signin";
import Home from "../pages/home/home";
import About from "../pages/about/about";


const router = createBrowserRouter([
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/signin",
    element: <Signin />
  },
  // {
  //   path:"/"
  // }
])
export default router;

