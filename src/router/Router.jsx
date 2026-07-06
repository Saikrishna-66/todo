import { createBrowserRouter } from "react-router";
import Signup from "../pages/signup/Signup";
import Signin from "../pages/signup/signin/Signin";


const router =createBrowserRouter([
  {
    path:"/signup",
    element: <Signup/>
  },
  {
    path:"/signin",
    element: <Signin/>
  },
])
export default router;

