import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import HomePage from "../Pages/HomePage";
import LoginPaege from "../Pages/LoginPaege";
import SignUp from "../Pages/SignUp";
import AddBike from "../Pages/AddBike";
import MyBike from "../Pages/MyBike";
import MainHome from "../Pages/MainHome";
import BikeDetails from "../Pages/BikeDetails";
import Welcome from "../Pages/Welcome";

const router = createBrowserRouter([
    {
        path: "/",
        // element: <Layout></Layout>,
        element:  <Welcome></Welcome>,
        errorElement: <h5>this page not found</h5>,
        children: [
            {
                path: "/",
                element: <MainHome></MainHome>
               
            },
            {
                path: "/login",
                element: <LoginPaege></LoginPaege>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/addbike",
                element: <AddBike></AddBike>
            },
            {
                path: "/mybike",
                element: <MyBike></MyBike>,
                loader: () => fetch("https://code.bikerp.com/bikes")
            },
            {
                path: "/bike/:id",
                element: <BikeDetails></BikeDetails>,
                loader: ({ params }) => fetch(`https://code.bikerp.com/bikes/${params.id}`)
            },
        ]
    }
])

export default router