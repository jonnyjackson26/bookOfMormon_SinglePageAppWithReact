import { Link } from "react-router-dom"
import React, { useState, useEffect, useContext } from 'react';
import books from '../books';
import NavBar from "../components/NavBar";


export const Context = React.createContext();

export function Home() {

    const [language, setLanguage] = useState('english');

    return (
        <Context.Provider value={[language, setLanguage]}>
            <NavBar book={undefined} chapter={undefined} />
            <h1>
                {language === 'spanish'
                    ? 'El libro de Mormón: otro testamento de Jesucristo'
                    : 'The Book of Mormon: Another Testament of Jesus Christ'}
            </h1>
            {books.map((book) => (
                <Link key={book.urlName} to={`/${book.urlName}`}>{book.bookName}</Link>
            ))}
        </Context.Provider>
    )
}
