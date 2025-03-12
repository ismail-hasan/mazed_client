import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const SignUp = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
               
                <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Sign Up for Bike Bazar</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
                        <input
                            type="text"
                            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
                            placeholder="Enter your full name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input
                            type="email"
                            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input
                            type="password"
                            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
                            placeholder="Create a password"
                        />
                    </div>
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
