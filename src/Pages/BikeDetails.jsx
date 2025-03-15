
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthProviders/AuthProvider';
import SingleCatagory from '../Components/SingleCatagory';
import Comment from '../Components/Comment';



const BikeDetails = () => {
    const { user } = useContext(AuthContext)
    const [category, setCategory] = useState([])
    const bike = useLoaderData()
    console.log('catae', bike?.category)


    const submitComment = e => {
        e.preventDefault()
        const form = new FormData(e.target)
        const commentData = form.get("comment")
        const comment = { commentData }
        console.log(comment)


        axios.post("http://localhost:3000/comment", comment)
            .then(res => {
                if (res.data?.insertedId) {
                    Swal.fire({
                        title: "Comment Success!",
                        icon: "success",
                        draggable: true
                    });
                }
                console.log(res.data)
            })
    }


    useEffect(() => {
        axios.get(`http://localhost:3000/bikes?category=${bike?.category}`)
            .then(res => {
                setCategory(res.data)
                console.log(res.data)
            })
    }, [bike?.category])

    return (
        <div className="w-11/12 mx-auto">
            <section>
                <div className="py-15 p-6 flex flex-col md:flex-row gap-6">
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
                            <span className="text-2xl font-bold text-blue-500">Price: {bike.price} <i className='text-sm'>BDT</i> </span>
                            <button className="bg-blue-500 text-white py-2 px-6 rounded-full  hover:bg-blue-600 transition duration-300">Buy Now</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* deatis  */}

            <section>
                <h2 className='text-2xl text-center'>More Info In This Bike</h2>
                <div className="max-w-full mx-auto p-4">
                    <div className="bg-white rounded-lg overflow-hidden flex flex-col md:flex-row">
                        {/* Left Side: Bike Review Section */}
                        <div className="w-full md:w-1/2 p-4">
                            <h2 className="text-3xl font-semibold text-gray-800">Bike Model X</h2>
                            <div className="mt-6">
                                <p className="text-lg text-gray-600">Engine: 1200cc</p>
                                <p className="text-lg text-gray-600">Battery Life: 150 miles</p>
                                <p className="text-lg text-gray-600">Top Speed: 200 km/h</p>
                                <p className="text-lg text-gray-600">Price: $25,000</p>
                            </div>
                        </div>

                        {/* Right Side: Comment Section */}
                        <div className="w-full md:w-1/2 p-4 border-gray-200">
                            <h3 className="text-2xl font-semibold text-gray-800">Comments Here</h3>
                            <form onSubmit={submitComment} className="mt-6 space-y-4">
                                <textarea
                                    name='comment'
                                    type="text" placeholder="Wriete Here" className="textarea textarea-info"></textarea>
                                <br />
                                {
                                    user?.email ?
                                        <button className="btn btn-outline btn-success">submit</button>
                                        :

                                        <p className="text-red-600">please first log in then comment </p>
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <h4>Related Post {category.length}</h4>
                <div className='grid grid-cols-4 gap-10 py-10'>
                    {
                        category.map(singleCategory => <SingleCatagory
                            key={singleCategory._id}
                            singleCategory={singleCategory}
                        ></SingleCatagory>)
                    }
                </div>
            </section>
            <section>
                <Comment></Comment>
            </section>



        </div>
    );
};

export default BikeDetails;
