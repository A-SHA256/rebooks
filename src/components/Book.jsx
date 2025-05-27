import PropTypes from "prop-types";
import { CiHeart } from "react-icons/ci";
import "./Book.css";
import { useState } from "react";

const Book = ({ book, addToCart }) => {
  const [like, setLike] = useState(false);

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
            onClick={() => {
              setLike((prev) => !prev);
              if (like) {
                addToCart(book.title, false);
              } else {
                addToCart(book.title, true);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Book;
