import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function ChapterPage({ book, chapter }) {
    const [verses, setVerses] = useState([]);

    useEffect(() => {
        const fetchVerses = async () => {
            try {
                const path = `././bom/${book.urlName}/${chapter}.txt`;
                const response = await fetch(path);
                const text = await response.text();
                const lines = text.split('\n');
                setVerses(lines.map((line, index) => <p key={index}>{line}</p>));
            } catch (error) {
                console.error('Error fetching verses:', error);
            }
        };

        fetchVerses();
    }, [book.urlName, chapter]);

    return (
        <>
            <h1>The Book of {book.bookName} Chapter {chapter}</h1>
            {verses}
        </>
    );
}
