



import React from 'react';
import { RiAlarmWarningLine } from 'react-icons/ri';
import { Helmet } from 'react-helmet-async';


const OurCompany = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
          <Helmet>
        <title>Page Title</title>
        <meta name="description" content="Description of the page" />
</Helmet>
        <div className="text-center">
          <RiAlarmWarningLine className="mx-auto w-16 h-16 text-yellow-500" />
          <h1 className="text-3xl font-bold text-gray-800 mt-4">Coming Soon</h1>
          <p className="text-gray-600 mt-2">We are working hard to bring amazing features!</p>
        </div>
      </div>
    );
  };
  

export default OurCompany;