import useBookContext from "../hooks/useBookContext";
import { BsCart2 } from "react-icons/bs";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Cart = ({ className }) => {
  const { added } = useBookContext();
  const navigate = useNavigate();

  return (
    <div className={className}>
      {added.length}
      <BsCart2
        onClick={() => navigate('/favorites')}
      />
    </div>
  );
};


Cart.propTypes = {
  className: PropTypes.string,
};

export default Cart;
