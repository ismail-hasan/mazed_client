import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';

// Sample bikes data (this would normally be fetched from a file or an API)
const bikeData = [
    {
        name: "Trek Madone 9.9",
        price: 9999,
        image: "https://example.com/images/trek-madone-9.9.jpg",
        description: "The Trek Madone 9.9 is a high-performance road bike designed for speed and comfort, ideal for competitive racing.",
        location: "New York, NY",
        ridekm: 1200,
    },
    {
        name: "Specialized S-Works Tarmac",
        price: 9500,
        image: "https://example.com/images/specialized-s-works-tarmac.jpg",
        description: "A race-ready road bike with an ultra-light carbon frame and precision handling for serious cyclists.",
        location: "Los Angeles, CA",
        ridekm: 800,
    },
    {
        name: "Canyon Aeroad CF SLX",
        price: 8500,
        image: "https://example.com/images/canyon-aeroad-cf-slx.jpg",
        description: "The Canyon Aeroad CF SLX features an aerodynamic design, making it one of the fastest bikes on the market for time trials.",
        location: "San Francisco, CA",
        ridekm: 1500,
    },
    // Add more bikes as needed...
];

const Bikes = () => {
    const [bikes, setBikes] = useState([]);

    useEffect(() => {
        // Normally, fetch the bikes from an API or local JSON file
        fetch("http://localhost:3000/bikes")
            .then(res => res.json())
            .then(data => {
                setBikes(data);

            })
    }, []);

    return (

        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-8">Bike Collection</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {bikes.map((bike, index) => (
                    <Link to={`bike/${bike._id}`} key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-2xl">
                        <img
                            src='https://cdn.bikedekho.com/processedimages/yamaha/mt-15-2-0/source/mt-15-2-06613f885e681c.jpg'
                            alt={bike.name}
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-2xl font-semibold text-gray-800">{bike.name}</h3>
                            <p className="text-xl text-gray-500 mt-2">Price: {bike.price} BDT</p>
                            <p className="text-gray-700 mt-4">{bike.description}</p>
                            <div className="flex justify-between items-center mt-4">
                                <span className="text-gray-600">{bike.location}</span>
                                <span className="text-gray-600">{bike.ridekm} km ridden</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>

    );
};

export default Bikes;
