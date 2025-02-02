import React from 'react';
import "./ExperienceCard.css"; 

const ExperienceCard = ({ details }) => {
  return (
    <div className="work-experience-card">
        <h6>{details.title}        
          <button className='downloadcerts-btn' onClick={() => {}}>
            <a href={details.certificate} target="_blank" rel="noreferrer"><img className='download-img' src="./assets/icons/download-icon.png" alt="react-logo" /></a>
          </button>
        </h6>

        <div className="work-duration">{details.date}</div>
        
        <ul>
            {details.responsibilities.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default ExperienceCard