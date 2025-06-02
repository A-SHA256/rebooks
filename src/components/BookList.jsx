import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Book from "./Book";
import CircularProgress from "@mui/material/CircularProgress";
import "./BookList.css";
import useBookContext from "../hooks/useBookContext";

const BookList = ({ className, isFavorite }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const { query, added } = useBookContext();

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
        <div className="centered">
          <CircularProgress className="retro-loader" />
        </div>
      ) : isFavorite ? (
        added?.length > 0 ? (
          added.map((book) => <Book key={book.key} book={book} />)
        ) : (
          <div className="centered">
            <p className="no-books">⚠️ No favorite books </p>
          </div>
        )
      ) : books?.length > 0 ? (
        books.map((book) => <Book key={book.key} book={book} />)
      ) : (
        <div className="centered">
          <p className="no-books">⚠️ No book has been found</p>
        </div>
      )}
    </div>
  );
};

BookList.propTypes = {
  className: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired
};

export default BookList;
