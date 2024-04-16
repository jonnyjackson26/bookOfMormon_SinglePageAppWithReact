import { Link } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';
import './NavBar.css'
import Path from './Path';

import { Context } from '../pages/_Home';

const NavBar = ({ book, chapter }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const openDropdown = () => {
        setIsDropdownOpen(true);
    };
    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    const [language, setLanguage] = useContext(Context);

    const handleLanguageChange = (lang) => {
        setLanguage(lang);
    }

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
                        <button onClick={() => handleLanguageChange('english')}>English</button>
                        <button onClick={() => handleLanguageChange('spanish')}>Spanish</button>
                        <button onClick={() => handleLanguageChange('german')}>German</button>
                        <button onClick={() => handleLanguageChange('french')}>French</button>
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