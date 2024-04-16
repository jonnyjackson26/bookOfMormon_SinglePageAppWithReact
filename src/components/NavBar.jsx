import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './NavBar.css'
import Path from './Path';

const NavBar = ({ book, chapter }) => {
    // State to manage the visibility of the dropdown
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Function to open the dropdown
    const openDropdown = () => {
        setIsDropdownOpen(true);
    };

    // Function to close the dropdown
    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="brand">
                <a href="#">Logo</a>
            </div>

            <Path book={book} chapter={chapter} />

            <div className="dropdown" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
                <button className="dropbtn">Languages</button>
                {isDropdownOpen && (
                    <div className="dropdown-content">
                        <button>English</button>
                        <button>Spanish</button>
                        <button>German</button>
                        <button>French</button>
                        <button>Russian</button>
                        <button>Mongolian</button>
                        <button>Kantoneese</button>
                        <button>Finnish</button>
                    </div>
                )}
            </div>
            <ul className="nav-links">
                <li><a href="#">Log in</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;