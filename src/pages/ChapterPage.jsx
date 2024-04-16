import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import SelectMenu from '../components/SelectMenu';
import NavBar from '../components/NavBar';

import { Context } from '../pages/_Home';


export function ChapterPage({ book, chapter }) {
    const [verses, setVerses] = useState([]);
    const [language, setLanguage] = useContext(Context);


    /*useEffect(() => {
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
    }, [book.urlName, chapter, language]);*/

    return (
        <>
            <NavBar book={book} chapter={chapter} />
            <SelectMenu />
            <h1>The Book of {book.bookName} Chapter {chapter}</h1>
            {verses}
            <h1>{langauge}</h1>
        </>
    );
}