import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const Layout = () => {
    return (
        <div className=''>


            <header>
                <Navbar></Navbar>
            </header>


            <main className=''>
                <Outlet></Outlet>
                <section></section>
                <section>

                </section>
            </main>


            <footer>
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default Layout;