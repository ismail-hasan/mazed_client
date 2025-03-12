import React from 'react';
import { useLoaderData } from 'react-router';




const BikeDetails = () => {
    const bike = useLoaderData()

    return (
        <div className="w-11/12 mx-auto p-6 flex flex-col md:flex-row gap-6">
            {/* Image Section */}
            <div className="md:w-1/2">
                <img
                    src='https://cdn.bikedekho.com/processedimages/yamaha/mt-15-2-0/source/mt-15-2-06613f885e681c.jpg'
                    alt={bike.name}
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>

            {/* Details Section */}
            <div className="md:w-1/2 flex flex-col ">
                <div>
                    <h2 className="text-3xl font-bold mb-4">{bike.name}</h2>
                    <p className="mb-4">{bike.description}</p>
                    <div className="flex justify-between text-yellow-400 text-sm mb-4">
                        <p>Location: {bike.location}</p>
                        <p>Ride: {bike.ridekm} km</p>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <span className="text-2xl font-bold text-blue-500">Price: {bike.price} BDT</span>
                    <button className="bg-blue-500 text-white py-2 px-6 rounded-full shadow-md hover:bg-blue-600 transition duration-300">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default BikeDetails;
