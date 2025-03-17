import React from 'react';
import { Link } from 'react-router';

const SingleCatagory = ({ singleCategory }) => {
    return (
        <Link target="_blank" to={`/bike/${singleCategory._id}`} key={singleCategory._id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-2xl">
            <img
                src={singleCategory.image || 'https://cdn.bikedekho.com/processedimages/yamaha/mt-15-2-0/source/mt-15-2-06613f885e681c.jpg'}
                alt={singleCategory.name}
                className="w-full h-56 object-cover"
            />
            <div className="p-4">
                <h3 className="text-2xl font-semibold text-gray-800">{singleCategory.name}</h3>
                <div className='flex justify-between items-center'>
                    <p className="text-xl text-gray-500 mt-2">Price: {singleCategory.price} </p>
                    <div style={{ color: 'oklch(0.546 0.245 262.881)' }} className="badge badge-outline badge-info text-sm mt-2">{singleCategory.category}</div>
                </div>
                <p className="text-gray-700 text-justify mt-4">{singleCategory.description.slice(0, 200)}</p>
                <div className="flex justify-between items-center mt-4">
                    <span className="text-gray-600">{singleCategory.location}</span>
                    <span className="text-gray-600 italic mb-1">
                        {singleCategory.ridekm} <span className='text-blue-600 italic'>
                            km ridden
                        </span>
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default SingleCatagory;