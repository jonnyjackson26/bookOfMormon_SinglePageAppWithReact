import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SelectMenu from '../components/SelectMenu';
import NavBar from '../components/NavBar';
//import { Highlight } from 'Highlight.js';

export function ChapterPage({ book, chapter }) {
    const [verses, setVerses] = useState([]);
    const [language, setLanguage] = useState('english');

    useEffect(() => {
        const fetchVerses = async () => {
            try {
                let path = `././bom/bom-${language}/${book.urlName}/${chapter}.txt`;
                const response = await fetch(path);
                const text = await response.text();
                const lines = text.split('\n');
                setVerses(lines.map((line, index) => <p key={index}> {index + 1} {line}</p>));
            } catch (error) {
                console.error('Error fetching verses:', error);
            }
        };

        fetchVerses();
    }, [book.urlName, chapter, language]);

    const handleLanguageChange = (lang) => {
        setLanguage(lang);
    }

    return (
        <>
            <NavBar book={book} chapter={chapter} />
            <SelectMenu />
            <h1>The Book of {book.bookName} Chapter {chapter}</h1>
            <button onClick={() => handleLanguageChange('spanish')}>Spanish</button>
            <button onClick={() => handleLanguageChange('english')}>English</button>
            <button onClick={() => handleLanguageChange('french')}>French</button>
            {verses}
        </>
    );
}