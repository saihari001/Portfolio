import React from 'react';
import './Hero.css';
import { BIO } from '../../utils/data';
import Typewriter from 'react-ts-typewriter';


const Hero = () => {
  return (
    <section id='home' className='hero-container'>
        <div className="hero-content">
            <span className='intro'>
                Hi, I am 
            </span><br />
            <span className='name'>
                {BIO.name}
            </span>
            <br />
                <span className='role'>
                I am a  
                    <Typewriter
                        autoStart={true}
                        text={BIO.role}
                        loop={true}
                        speed = {200}
                        delay={600}
                    />
                </span>
            <p>
            Enthusiastic and dedicated individuals with a passion for web developer with
            proficient in front-end and back-end technologies, Eager to take a new challenges with passion for learning. I am dedicated to delivering a high quality results.
            I am ready to make a meaningful contribution and achieve greater things.
            </p>
            <button className='contact-btn' onClick={() => {}}><a href="./assets/files/HariPrasanthS_Resume.pdf" download> Download Resume</a></button>
        </div>
        <div className="hero-img">
            <div>
                <div className="tech-icon">
                    <img src="./assets/icons/react.png" alt="react-logo" />
                </div>
                <div className='hero-image'>
                    <img src="./assets/images/Hero_img.jpg" alt="hero-img" />
                </div>
            </div>
            <div>
                <div className="tech-icon">
                    <img src="./assets/icons/html.png" alt="html-logo" />
                </div>
                <div className="tech-icon">
                    <img src="./assets/icons/css.png" alt="css-logo" />
                </div>
                <div className="tech-icon">
                    <img src="./assets/icons/js.png" alt="js-logo" />
                </div>
                <div className="tech-icon">
                    <img src="./assets/icons/python.png" alt="python-logo" />
                </div>
                <div className="tech-icon">
                    <img src="./assets/icons/java.png" alt="java-logo" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero