import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import HomePage from "../Pages/HomePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>
            }
        ]
    }
])

export default router