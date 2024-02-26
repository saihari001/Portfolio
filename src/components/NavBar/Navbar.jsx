import React, { useState } from "react";
import "./Navbar.css"
import MobileNav from "./MobileNav";
import { HashLink as Link } from 'react-router-hash-link'

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }
  return (
    <>
        <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        <nav className="nav-wrapper">
            <div className="nav-content">
                <h2 className="logo">
                    <span>PortFolio</span>
                </h2>

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
                <button className="menu-btn" onClick={toggleMenu}>
                    <span className="material-symbols-outlined" style={{ fontSize:"1.8rem" }}>
                        {openMenu ? "close" : "menu"}
                    </span>
                </button>
            </div>
        </nav>
    </>
  )
}

export default Navbar