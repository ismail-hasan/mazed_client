import React, { useContext, useState } from "react";
import { Form, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProviders/AuthProvider";

const AddBike = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    // const [imgURL, setImageURL] = useState('')

    // console.log('curren image is', imgURL)

    const addBikeHandle = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const name = form.get('name')
        const price = form.get('price')
        const image = form.get('image')
        const description = form.get('description')
        const category = form.get('category')
        const location = form.get('location')
        const ridekm = form.get('rideKm')
        const email = user?.email


        const newImage = new FormData()
        newImage.append("image", image)

        fetch('https://api.imgbb.com/1/upload?key=c6ad6b5e3ae6169a78df6d4d45efd952', {
            method: 'POST',
            body: newImage
        })
            .then(res => res.json())
            .then(data => {
                const imageData = data.data.url
                // setImageURL(imageData)
                console.log("submit", imageData)
                const bikeInfo = {
                    name, price,
                    image: data.data.url,
                    description, category, location, ridekm, email
                }
                console.log(bikeInfo)
                fetch('https://code.bikerp.com/bikes', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(bikeInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                title: "Drag me!",
                                icon: "success",
                                draggable: true
                            });
                            navigate('/')

                            console.log(data);
                        }
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });

            })


        // fetch('https://code.bikerp.com/bikes', {
        //     method: '',
        //     headers: {
        //         'Content-Type': 'application/json', // Corrected the content-type
        //     },
        //     body: JSON.stringify(bikeInfo) // Correctly stringifying the bikeInfo object
        // })
        //     .then(res => res.json())  // Parse the JSON response
        //     .then(data => {
        //         if (data.insertedId) {
        //             Swal.fire({
        //                 title: "Drag me!",
        //                 icon: "success",
        //                 draggable: true
        //             });
        //             navigate('/')

        //             console.log(data);
        //         }
        //     })
        //     .catch(error => {
        //         console.error('Error:', error); // Handle any errors
        //     });


        // fetch data mongodb 
        //     fetch('https://code.bikerp.com/addbike', {
        //         method: 'POST',
        //         headers: {
        //             'content-type': 'application/json'
        //         },
        //         body: JSON.stringify(bikeInfo)
        //     })
        //         .then(res => res.json())
        //         .then(data => {
        //             console.log(data)
        //         })
        //         .catch(error => {
        //             console.error('Error:', error); // Handle any errors
        //         });
        // }

    }


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 py-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
                    Add a New Bike
                </h2>
                <form onSubmit={addBikeHandle}>
                    {/* Bike Name */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Bike Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter bike name"
                            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    {/* Price */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Price
                        </label>
                        <input
                            type="number"
                            name="price"
                            placeholder="Enter price"
                            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    {/* Image URL */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Bike Image URL
                        </label>
                        <input
                            type="file"
                            name="image"
                            placeholder="Enter image URL"
                            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    {/* Ride KM */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Ride KM
                        </label>
                        <input
                            type="number"
                            name="rideKm"
                            placeholder="Enter ride kilometers"
                            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    {/* category */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Select category
                        </label>
                        <select name="category" defaultValue="Server location" className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500">
                            <option disabled={true}>Select category</option>
                            <option value={'bike'}>Bike</option>
                            <option value={'bicycle'}>Bi-Cycle</option>
                        </select>
                    </div>


                    {/* Location */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Location
                        </label>
                        <input
                            type="text"
                            name="location"
                            placeholder="Enter bike location"
                            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
                        />
                    </div>


                    {/* Description */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Description
                        </label>
                        <textarea
                            name="description"
                            placeholder="Enter bike description"
                            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors"
                    >
                        Add Bike
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddBike;
