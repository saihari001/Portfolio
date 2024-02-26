import React, { useRef } from 'react';
import "./WorkExperience.css";
import { WORK_EXPERIENCE } from '../../utils/data';
import ExperienceCard from './ExperienceCard';
import Slider from 'react-slick';

const WorkExperience = () => {
    const sliderRef = useRef()
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slideToShow: 2,
        slideToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slideToShow: 1,
                    slideToScroll: 1,
                },
            },
        ],
    };
    const slideRight = () => {
        sliderRef.current.slickPrev();
    };
    const slideLeft = () => {
        sliderRef.current.slickNext();
    }
  return (
    <div id='experience' className="experience-container">
        <h5>Work Experience</h5>
        <div className="experience-content">
            <div className='arrow-right' onClick={slideRight}>
                <span className='material-symbols-outlined'>chevron_right</span>
            </div>
            <div className='arrow-left' onClick={slideLeft}>
                <span className='material-symbols-outlined'>chevron_left</span>
            </div>
            <Slider ref={sliderRef} {...settings}>
                {WORK_EXPERIENCE.map((item) => (
                    <ExperienceCard 
                        key={item.title}
                        details={item}
                    />
                ))}
            </Slider>
        </div>
    </div>
  )
}

export default WorkExperience