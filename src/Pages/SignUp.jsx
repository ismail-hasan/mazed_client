import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../AuthProviders/AuthProvider";

const SignUp = () => {
    const { signUpUser } = useContext(AuthContext)
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
        const email = form.get("email");
        const password = form.get("password");
        const signUpData = { name, email, password };

        console.log(signUpData);


        // firebsae get data 
        signUpUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log("User signed in: ", user);
                navigate("/");  // Redirect to dashboard or home page
            })
            .catch((error) => {
                // Handle errors
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);  // Show error message to the user
                console.log(errorCode, errorMessage);
            });





    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Sign Up for Bike Bazar</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
                            placeholder="Enter your full name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
                            placeholder="Create a password"
                        />
                    </div>
                    {error && <p className="text-red-600 text-sm">{error}</p>}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors">
                        Sign Up
                    </button>
                </form>
                <div className="flex items-center justify-center mt-6">
                    <div className="border-t w-full border-gray-300"></div>
                    <p className="mx-3 text-gray-500">Or</p>
                    <div className="border-t w-full border-gray-300"></div>
                </div>
                <button
                    className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-2 mt-4 rounded-xl hover:bg-gray-100 transition-colors">
                    <FcGoogle className="mr-3 text-xl" />
                    Sign Up with Google
                </button>
                <p className="text-center text-gray-600 mt-6">
                    Already have an account?
                    <Link to={'/login'} href="#" className="text-blue-600 hover:underline">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
