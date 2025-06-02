import PropTypes from "prop-types";
import { useState } from "react";
import "./Form.css";
import useBookContext from "../hooks/useBookContext";

const Form = () => {
  const [value, setValue] = useState("");
  const { setQuery } = useBookContext();

  const submitHandler = (e) => {
    e.preventDefault();
    setQuery(value);
  };

  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <input
        type="text"
        placeholder="Enter a name of the book"
        onChange={(e) => setValue(e.target.value)}
        required
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Form;
