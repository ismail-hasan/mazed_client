import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import HomePage from "../Pages/HomePage";
import LoginPaege from "../Pages/LoginPaege";
import SignUp from "../Pages/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <h5>this page not found</h5>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>
            },
            {
                path: "/login",
                element: <LoginPaege></LoginPaege>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
        ]
    }
])

export default router