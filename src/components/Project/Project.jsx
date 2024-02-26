import React from 'react';
import "./Project.css";
import { PROJECT } from '../../utils/data';
import ProjectCard from './ProjectCard';
const Project = () => {
  return (
    <section id='project' className='project-container'>
        <h5>Project</h5>

        <div className='project-content'>
            <div className='project'>
                {PROJECT.map((item) => (
                    <ProjectCard key={item.title} details={item}/>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Project