import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import BookList from "./components/BookList";
import Cart from "./components/Cart";

const App = () => {
  const [value, setValue] = useState("");
  const [arr, setArr] = useState([]);
  const [title, setTitle] = useState("");
  const [like, setLike] = useState(false);

  const getValue = (query) => {
    setValue(query);
  };

  const addToCart = (title, like) => {
    setTitle(title);
    setLike(like);
  };

  useEffect(() => {
    const favorites = () => {
      if (like) {
        setArr((prev) => [...prev, title]);
      } else {
        setArr((prev) => prev.filter((book) => book !== title));
      }
    };
    favorites();
  }, [title, like]);

  return (
    <div className="app">
      <Cart className="cart" list={arr} />
      <Form getValue={getValue} />
      <BookList className="book-list" query={value} addToCart={addToCart} />
    </div>
  );
};

export default App;

//<div className='placeholder'></div>
