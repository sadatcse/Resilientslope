import React from 'react';
import { Link, NavLink } from "react-router-dom";
import logo from "../../../public/logo.png"

const Header = () => {

    const navlinks = <> 
    <li><NavLink to="/" className="text-white hover:text-blue-900">Home</NavLink></li>
    <li><NavLink to="/about" className="text-white hover:text-blue-900">About</NavLink></li>
    <li><NavLink to="/service" className="text-white hover:text-blue-900">Service</NavLink></li>
    <li><NavLink to="/projects" className="text-white hover:text-blue-900">Projects</NavLink></li>
    <li><NavLink to="/contact" className="text-white hover:text-blue-900">Contact</NavLink></li>
    
    </>
    
    return (
        <div className="navbar bg-blue-600 border-b-1 border-blue-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-200 rounded-box w-52">
                        {navlinks}
                    </ul>
                </div>
                <Link to="/" className="btn-ghost"><img className='w-48 h-16' src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                {/* Add any additional elements here */}
            </div>
        </div>
    );
};

export default Header;
