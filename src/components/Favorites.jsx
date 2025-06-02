import { useNavigate } from "react-router-dom";
import BookList from "./BookList";
import './BookList.css';
import PropTypes from "prop-types";

const Contact = ({ className }) => {
    const navigate = useNavigate();
  
    const handleSubmit = () => {
      navigate('/');
    };
  
    return <button className={className} onClick={handleSubmit}>Submit</button>;
}

const Favorites = () => {

    return (
        <div className="centered">
          <BookList className="book-list" isFavorite/>
            {/* <div className="centered">
              <p className="no-books">⚠️ No book has been added</p>
            </div> */}
          <Contact className="return"/>
        </div>
      );
}

Contact.propTypes = {
  className: PropTypes.string,
};


export default Favorites;