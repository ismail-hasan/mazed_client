import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../AuthProviders/AuthProvider';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import { div } from 'framer-motion/client';


const MyBike = () => {
    const [bikes, setBikes] = useState([]);
    const { user } = useContext(AuthContext)


    useEffect(() => {
        axios.get(`http://localhost:3000/bikes?email=${user?.email}`)
            .then(res => {
                setBikes(res.data)
                console.log(res.data)
            })
    }, [user?.email])

    // delete fetct data 

    const handleDelte = id => {
        console.log("id", id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:3000/bikes/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            const remaingBike = bikes.filter(remaing => remaing._id !== id)
                            setBikes(remaingBike)
                        }
                        console.log(res.data)
                    })
            }
        });




        // fetch(`http://localhost:3000/bikes/${id}`, {
        //     method: 'DELETE'
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log("delete", data)
        //     })
    }

    return (
        <>
            <h3 className='text-2xl'>Total Add:{bikes.length}</h3>
            <div className="overflow-x-auto w-11/12 mx-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Bike Name</th>
                            <th>Price</th>
                            <th>Category Color</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bikes.map((bike, idx) => <tr key={bike._id} className="bg-base-200">
                                <th>{idx + 1}</th>
                                <td>{bike.name}</td>
                                <td>{bike.price}</td>
                                <td>{bike.category}</td>
                                <td onClick={() => handleDelte(bike._id)}>
                                    <Link>X</Link>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </>
    )
};

export default MyBike;
