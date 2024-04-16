import { Link } from "react-router-dom"
import NavBar from "../components/NavBar";

export function BookPage({ book }) {
    const chapterLinks = [];
    for (let i = 1; i <= book.numOfChapters; i++) {
        chapterLinks.push(
            <Link key={i} to={`${i}`}>Chapter {i}</Link>
        );
    }

    return (
        <>
            <NavBar book={book} chapter={undefined} />
            <h1>The Book of {book.bookName}</h1>
            {chapterLinks}
        </>
    );
}