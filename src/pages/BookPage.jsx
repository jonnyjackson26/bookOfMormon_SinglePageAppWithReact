import { Link } from "react-router-dom"
import NavBar from "../components/NavBar";
import React, { useState, useEffect, useContext } from 'react';

import { Context } from '../pages/_Home';

export function BookPage({ book }) {
    const chapterLinks = [];
    for (let i = 1; i <= book.numOfChapters; i++) {
        chapterLinks.push(
            <Link key={i} to={`${i}`}>Chapter {i}</Link>
        );
    }

    const [language, setLanguage] = useContext(Context);

    return (
        <>
            <NavBar book={book} chapter={undefined} />
            <h1>
                {language === 'spanish'
                    ? `El libro de ${book.bookName}`
                    : `The Book of ${book.bookName}`}
            </h1>
            <h3>lang: {language}</h3>
            {chapterLinks}
        </>
    );
}