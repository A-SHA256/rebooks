import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Book from "./Book";
import CircularProgress from "@mui/material/CircularProgress";
import "./BookList.css";

const BookList = ({ query, className, addToCart }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;
    const getBooks = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://openlibrary.org/search.json?limit=20&title=${encodeURIComponent(query)}`,
        );
        if (res.status !== 200) {
          throw new Error(`The error status is ${res.status}`);
        }
        setBooks(res.data.docs);
      } catch (error) {
        console.log(error.message);
        return null;
      } finally {
        setLoading(false);
      }
    };
    getBooks();
  }, [query]);

  return (
    <div className={className}>
      {loading ? (
        <CircularProgress />
      ) : books?.length > 0 ? (
        books.map((book) => (
          <Book key={book.key} book={book} addToCart={addToCart} />
        ))
      ) : (
        <p>No book has been found</p>
      )}
    </div>
  );
};

BookList.propTypes = {
  query: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default BookList;
