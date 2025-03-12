import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../AuthProviders/AuthProvider';
import '../app.css'

const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext)
    const navigate = useNavigate();
    const link = <>

        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink>Bike</NavLink></li>
        <li><NavLink>Bi Cycle</NavLink></li>
        {
            user?.email &&
            <>
                <li><NavLink to={'addbike'}>Add Bike</NavLink></li>
                <li><NavLink to={"mybike"}>My Bike</NavLink></li>
            </>

        }

        <li><NavLink>{user?.email}</NavLink></li>
    </>



    const logOut = () => {
        logOutUser()
            .then(() => {
                console.log("User signed out successfully");
                navigate("/login"); // Redirect to login page after sign out
            })
            .catch((error) => {
                console.error("Error signing out: ", error.message);
            });
    }



    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm px-15">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {link}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Bike Bazar</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {link}

                    </ul>
                </div>
                <div className="navbar-end ">

                    {
                        user?.email ?
                            <Link onClick={logOut} className="btn mr-4">Log Out</Link>
                            :
                            <>
                                <Link to={'/login'} className="btn mr-4">Log In</Link>
                                <Link to={'/signup'} className="btn">Sign Up</Link>
                            </>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;