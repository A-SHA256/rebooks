import { useContext } from "react";
import BookContext from "../context/BookContext.js";

const useBookContext = () => {
    const context = useContext(BookContext);
    return context;
}

export default useBookContext;
