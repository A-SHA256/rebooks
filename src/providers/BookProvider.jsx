import { useState } from "react";
import BookContext from "../context/BookContext.js";

const BookProvider = ({ children }) => {
    const [added, setAdded] = useState([]);
    const [query, setQuery] = useState('');
    
    return (
        <BookContext.Provider value={{added, setAdded, query, setQuery}}>
            {children}
        </BookContext.Provider>
    )
}

export default BookProvider;