import { Link } from "react-router-dom"
import books from '../books';

export function Home() {
    return (
        <>
            <h1>The Book of Mormon: Another Testament of Jesus Christ</h1>
            {books.map((book) => (
                <Link key={book.urlName} to={`/${book.urlName}`}>{book.bookName}</Link>
            ))}
        </>
    )
}