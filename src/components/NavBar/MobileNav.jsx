import React from 'react';
import './MobileNav.css';
import { HashLink as Link } from 'react-router-hash-link';

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
        <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>

            <div className='mobile-menu-container'>
            <ul>
                    <li>
                        <Link to="#home" className="menu-item">
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link to="#skills" className="menu-item">
                            Skills
                        </Link>
                    </li>

                    <li>
                        <Link to="#project" className="menu-item">
                            Project
                        </Link>
                    </li>

                    <li>
                        <Link to="#experience" className="menu-item">
                            Work Experience
                        </Link>
                    </li>

                    <li>
                        <Link to="#contact" className="menu-item">
                            Contact Me
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default MobileNav