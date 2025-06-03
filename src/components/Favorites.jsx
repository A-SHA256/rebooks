import { useNavigate } from "react-router-dom";
import BookList from "./BookList";
import './Favorites.css';
import PropTypes from "prop-types";

const Contact = ({ className }) => {
    const navigate = useNavigate();
  
    const handleSubmit = () => {
      navigate('/');
    };
  
    return <button className={className} onClick={handleSubmit}>Go Back</button>;
}

const Favorites = () => {
    return (
        <div className="centered">
          <div className="content-wrapper">
            <Contact className="return"/>
            <BookList className="book-list" isFavorite/>
              {/* <div className="centered">
                <p className="no-books">⚠️ No book has been added</p>
              </div> */}
          </div>
        </div>
      );
}

Contact.propTypes = {
  className: PropTypes.string,
};


export default Favorites;