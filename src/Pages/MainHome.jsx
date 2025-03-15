import React from 'react';
import HomePage from './HomePage';
import Bikes from '../Components/Bikes';
import Newsletter from '../Components/Newsletter';

const MainHome = () => {
    return (
        <div>
            <HomePage></HomePage>
            <Bikes></Bikes>
            <Newsletter></Newsletter>
        </div>
    );
};

export default MainHome;