import PropTypes from "prop-types";
import { useState } from "react";
import "./Form.css";

const Form = ({ getValue }) => {
  const [value, setValue] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    getValue(value);
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

Form.propTypes = {
  getValue: PropTypes.func.isRequired,
};

export default Form;
