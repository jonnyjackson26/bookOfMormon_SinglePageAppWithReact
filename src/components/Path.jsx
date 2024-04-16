import { Link } from 'react-router-dom';
import './Path.css';

const Path = ({ book, chapter }) => {

    return (
        <>
            <div id="container">
                <Link to="/" className="link">The Book of Mormon</Link> {/* Always render this link */}
                {/* Render book.bookName link only if book is defined */}
                {book && <Link to={`/${book.urlName}`} className="link">{book.bookName}</Link>}
                {/* Render chapter link only if both book and chapter are defined */}
                {book && chapter && <Link to={`/${book.urlName}/${chapter}`} className="link">Chapter {chapter}</Link>}
            </div>
        </>
    )
}
export default Path;