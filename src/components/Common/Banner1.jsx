import React from 'react';

const Banner1 = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/LxM2skr/Picture2.jpg)'}}>
            <div className="hero-overlay bg-blue-300 bg-opacity-30"></div>
            <div className="hero-content text-center text-blue-100">
                <div className="w-full">
                    <h1 className="mb-5 text-5xl font-bold text-blue-700	">Hello there!</h1>
                    <p className="mb-5 text-4xl font-bold 	">Advanced Investigation, Design and Stabilization of Slopes.</p>
                    <button className="btn btn-blue px-12">Visit now!</button>
                </div>
            </div>
        </div>
    );
};

export default Banner1;
