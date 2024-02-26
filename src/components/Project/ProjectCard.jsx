import React from 'react';
import "./ProjectCard.css";
import { HashLink as Link} from 'react-router-hash-link';

const ProjectCard = ({ details }) => {
    console.log(details.site)
  return (
    <div className="project-card">
        <div style={{flex: 1}}>
            <div className="project-image">
                <img src={details.image} alt="project-pic" />
            </div>
        </div>
        <div style={{flex: 1}}>
            <h4 className='project-title'>{details.title}</h4>
            <button className='project-github'>
                <Link to={details.github} style={{textDecoration: 'none'}}>
                    Github
                </Link>
            </button>
            {details.site ?
            <button className='project-site'>
                <Link to={details.site} style={{textDecoration: 'none'}}>
                    Visit Site
                </Link>
            </button>
            : ""}
        </div>
    </div>
  )
}

export default ProjectCard