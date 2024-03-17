import React from 'react';
import { AiFillFacebook, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-blue-600 text-blue-900 rounded">
            <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover text-white">About us</a>
                <a className="link link-hover text-white">Contact</a>
                <a className="link link-hover text-white">Service</a>
                <a className="link link-hover text-white">Press kit</a>
            </nav>
            <nav>
            <div className="grid grid-flow-col gap-4">
    <a><AiFillFacebook size={48} color="white" /></a>
    <a><AiOutlineTwitter size={48} color="white" /></a>
    <a><AiFillInstagram size={48} color="white" /></a>
</div>
            </nav>
            <aside>
                <p className='text-white'>Copyright © 2024 - All right reserved by Resilient Slope</p>
            </aside>
        </footer>
    );
};

export default Footer;
