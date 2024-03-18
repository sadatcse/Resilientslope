import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineInfoCircle, AiOutlineHistory, AiOutlineTeam, AiOutlineFileText } from 'react-icons/ai';
import { Helmet } from 'react-helmet-async';


const AboutUs = () => {
    return (
        <div className="container mx-auto mt-10">
            <Helmet>
        <title>Page Title</title>
        <meta name="description" content="Description of the page" />
</Helmet>
            <h1 className="text-4xl text-center text-blue-500 mb-8">About Us</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-blue-200 p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
                    <AiOutlineInfoCircle className="text-5xl mb-4 text-blue-500" />
                    <h2 className="text-xl font-bold mb-2">Our Company</h2>
                    <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate, arcu vel ultricies.</p>
                    <Link to="/company" className="text-blue-500 mt-4">Learn more</Link>
                </div>
                <div className="bg-blue-200 p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
                    <AiOutlineHistory className="text-5xl mb-4 text-blue-500" />
                    <h2 className="text-xl font-bold mb-2">History</h2>
                    <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate, arcu vel ultricies.</p>
                    <Link to="/history" className="text-blue-500 mt-4">Learn more</Link>
                </div>
                <div className="bg-blue-200 p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
                    <AiOutlineTeam className="text-5xl mb-4 text-blue-500" />
                    <h2 className="text-xl font-bold mb-2">Leadership Team</h2>
                    <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate, arcu vel ultricies.</p>
                    <Link to="/team" className="text-blue-500 mt-4">Learn more</Link>
                </div>
                <div className="bg-blue-200 p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
                    <AiOutlineFileText className="text-5xl mb-4 text-blue-500" />
                    <h2 className="text-xl font-bold mb-2">Certifications</h2>
                    <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate, arcu vel ultricies.</p>
                    <Link to="/certifications" className="text-blue-500 mt-4">Learn more</Link>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;