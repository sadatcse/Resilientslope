import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MdLocationOn, MdTimeline, MdLayers, MdRadar, MdLayersClear, MdCameraAlt, MdStorage, MdBuild, MdSearch } from 'react-icons/md';


const Service = () => {
    const services = [
        { title: "Analysis and Design", icon: MdTimeline },
        { title: "Value Engineering", icon: MdBuild, image: "https://www.constructionplacements.com/wp-content/uploads/2023/05/Value-Engineering-in-Construction.jpg.webp" },
        { title: "Non-Destructive Testing", icon: MdSearch },
        { title: "Electrical Resistivity Imaging", icon: MdLayers },
        { title: "Ground Penetration Radar", icon: MdRadar },
        { title: "MASW", icon: MdLayersClear },
        { title: "Instrumentation and Monitoring", icon: MdStorage },
        { title: "LiDAR Imaging", icon: MdCameraAlt },
        { title: "Drone Imaging", icon: MdCameraAlt },
        { title: "Seepage Analyses", icon: MdTimeline },
        { title: "Forensic Investigations", icon: MdLocationOn }
    ];

    return (
        <div className="min-h-screen bg-gray-100">
        <Helmet>
            <title>Services</title>
            <meta name="description" content="Description of services provided" />
        </Helmet>
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div key={index} className="bg-white rounded-lg shadow p-6 flex items-center">
                        <service.icon className="text-4xl mr-4 text-blue-500" />
                        <h2 className="text-xl font-semibold">{service.title}</h2>
                        {/* You can add more details about each service here if needed */}
                    </div>
                ))}
            </div>
        </div>
    </div>
);
};

export default Service;
