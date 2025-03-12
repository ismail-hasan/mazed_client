import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Shared/Navbar';

const Layout = () => {
    return (
        <div className=''>


            <header>
                <Navbar></Navbar>
            </header>


            <main className='w-11/12 mx-auto'>
                <Outlet></Outlet>
            </main>


            <footer></footer>

        </div>
    );
};

export default Layout;