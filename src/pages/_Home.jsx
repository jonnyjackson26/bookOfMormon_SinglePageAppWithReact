import { Link } from "react-router-dom"
import books from '../books';
import NavBar from "../components/NavBar";

export function Home() {
    return (
        <>
            <NavBar book={undefined} chapter={undefined} />
            <h1>The Book of Mormon: Another Testament of Jesus Christ</h1>
            {books.map((book) => (
                <Link key={book.urlName} to={`/${book.urlName}`}>{book.bookName}</Link>
            ))}
        </>
    )
}