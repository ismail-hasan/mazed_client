import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../AuthProviders/AuthProvider";

const LoginPage = () => {
    const { logInUser, googleLogin } = useContext(AuthContext)
    const [error, setError] = useState("");
    const navigate = useNavigate();


    const handleLogSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get("email");
        const password = form.get("password");
        const signUpData = { email, password };

        console.log(signUpData);


        // login to firebase 
        logInUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log("User logged in: ", user);
                navigate("/");
            })
            .catch((error) => {
                // Handle login errors (e.g., wrong credentials)
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage); // Set error message to state
                console.log(errorCode, errorMessage);
            });

    }


    // google login 
    const googleBtn = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                if (user) {
                    console.log(result)
                    navigate('/')
                }
                else {
                    console.log("lgoin error")
                }
            })
            .err(err => {
                console.log(err)
            })
    }




    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Login to Bike Bazar</h2>
                <form onSubmit={handleLogSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input
                            name="email"
                            type="email"
                            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input
                            name="password"
                            type="password"
                            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors">
                        Login
                    </button>
                </form>
                <div className="flex items-center justify-center mt-6">
                    <div className="border-t w-full border-gray-300"></div>
                    <p className="mx-3 text-gray-500">Or</p>
                    <div className="border-t w-full border-gray-300"></div>
                </div>
                {error && <p className="text-red-600 text-sm">{error}</p>}
                <button onClick={googleBtn}
                    className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-2 mt-4 rounded-xl hover:bg-gray-100 transition-colors">
                    <FcGoogle className="mr-3 text-xl" />
                    Login with Google
                </button>
                <p className="text-center text-gray-600 mt-6">
                    Don't have an account? <Link to={'/signup'} href="#" className="text-blue-600 hover:underline">Sign Up</Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
