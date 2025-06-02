import "./App.css";
import Form from "./components/Form";
import BookList from "./components/BookList";
import Cart from "./components/Cart";
import Favorites from "./components/Favorites";
import NotFound from "./components/NotFound";
import {Routes, Route } from 'react-router-dom';
import BookProvider from "./providers/BookProvider";

const App = () => {
  return (
    <BookProvider>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Cart className="cart" />
              <Form />
              <BookList className="book-list" isFavorite={false} />
            </>
          }
        />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BookProvider>
  );
};

export default App;


