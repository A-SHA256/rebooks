import PropTypes from "prop-types";
import { CiHeart } from "react-icons/ci";
import "./Book.css";
import { useState, useEffect } from "react";
import useBookContext from "../hooks/useBookContext";
import { useLocation } from "react-router-dom";
import './BookList.css'

const Book = ({ book }) => {
  const [like, setLike] = useState(false);
  const { added, setAdded } = useBookContext();

  const location = useLocation();

  const handleAdded = () => {
    const isExist = added.some(b => (b.title === book.title) && (b.author_name === book.author_name));
  
    setLike(prev => !prev);
  
    if (!isExist) {
      setAdded(prev => [...prev, book]);
    } else {
      setAdded(prev => prev.filter(b => (b.title !== book.title) && (b.author_name !== book.author_name)));
    }
  };
  
  const removeFavorite = () => {
    setAdded(prev => prev.filter(b => (b.title !== book.title) && (b.author_name !== book.author_name)))
  }

  useEffect(() => {
    const isExist = added.some(b => (b.title === book.title) && (b.author_name === book.author_name));
    setLike(isExist);
  }, [added, book.title, book.author_name]);

  return (
    <div className="book-container">
      <div className="img-and-author">
        <img
          src={
            book.cover_i
              ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
              : "https://nftcalendar.io/storage/uploads/2022/02/21/image-not-found_0221202211372462137974b6c1a.png"
          }
          alt={book.title}
        />
        <div className="authors">
          <div>
            {book.author_name?.map((name, index) => {
              return <h2 key={index}>{name}</h2>;
            })}
          </div>
          {book.first_publish_year && (
            <p>Published: {book.first_publish_year}</p>
          )}
          <CiHeart
            className={like ? "liked" : ""}
            onClick={handleAdded}
          />
          {like && location.pathname === "/favorites" && (
            <button className="no-books" onClick={removeFavorite}>Remove book from Favorites</button>
          )}
        </div>
      </div>
    </div>
  );
};



export default Book;
