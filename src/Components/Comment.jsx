import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProviders/AuthProvider';
import axios from 'axios';

const Comment = () => {
    const { user } = useContext(AuthContext);
    const [newComments, setnewComments] = useState([]);


    useEffect(() => {
        // Fetch the comments when the component mounts
        axios.get('https://code.bikerp.com/comment')
            .then(res => {
                setnewComments(res.data); // Set the comments into the state
            })
            .catch(err => {
                console.error('Error fetching comments:', err);
            });
    }, []);

    return (
        <div>
            <h3>Comments</h3>
            <div className='flex gap-10 flex-col'>
                {
                    newComments.map(comm => (
                        <div key={comm._id} className="card bg-base-100 w-96 shadow-sm">
                            <div className="flex items-center">
                                <div className="card-actions">
                                    <img className='w-25 h-20 rounded-4xl'
                                        src="https://static.vecteezy.com/system/resources/previews/036/373/943/non_2x/man-icon-illustration-vector.jpg"
                                        alt="User Avatar" />
                                </div>
                                <div>
                                    <h2 className="card-title">Ismail Hasan</h2>
                                    <p>{comm.commentData}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Comment;
