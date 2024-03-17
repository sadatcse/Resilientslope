import React from 'react';

const FullPageBanner = ({ imageUrl }) => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center">
          <h1 className="text-white text-4xl font-bold mb-4">Your Banner Title</h1>
          <p className="text-white text-lg mb-8">Your banner subtitle or description</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Call to Action
          </button>
        </div>
      </div>
    </div>
  );
};

export default FullPageBanner;