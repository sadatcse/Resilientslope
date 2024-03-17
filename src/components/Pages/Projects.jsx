import React from 'react';
import data from '../../../public/Projects.json'


const Projects = () => {
  return (
    
    <div>
          <h1 className="text-2xl font-bold text-center my-4">Projects</h1>
      <p className="text-lg text-center mb-8">Explore our latest projects below</p>
      <div className="flex flex-wrap justify-center">
      {data.map(project => (
        <div key={project.projectId} className="card card-compact w-96 bg-base-100 shadow-xl m-4">
          <figure>
            <img src={project.images[0].imageUrl} alt={project.title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{project.title}</h2>
            <p>Location :{project.location}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">View Details</button>
            </div>
          </div>
        </div>
      ))}
    </div>

    </div>
  
  );
};

export default Projects;