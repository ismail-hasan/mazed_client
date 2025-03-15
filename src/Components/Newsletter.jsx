import React, { useState } from 'react';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the submission logic (e.g., sending email to the server)
        console.log('Email Submitted:', email);
    };

    return (
        <section className="bg-gray-900 text-white py-16 px-6">
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Left side (Text) */}
                <div className="mb-8 md:mb-0 md:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated with Our Latest News!</h2>
                    <p className="text-lg md:text-xl mb-6">
                        Sign up for our newsletter and get the latest updates straight to your inbox.
                    </p>
                </div>

                {/* Right side (Form) */}
                <div className="md:w-1/2">
                    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-start items-center space-y-4 md:space-y-0 md:space-x-4">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full md:w-80 p-4 rounded-md text-black placeholder-gray-500 outline outline-1 outline-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full md:w-auto py-3 px-6 bg-blue-500 hover:bg-blue-600 rounded-md font-semibold  cursor-pointer focus:outline-none focus:ring-2"
                        >
                            Subscribe Now
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
