import { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import "./Cart.css";

const Cart = ({ className, list }) => {
  const [items, setItems] = useState([]);

  return (
    <div className={className}>
      {list.length}
      <BsCart2
        onClick={() => {
          if (document.querySelector(".cart-items").children.length > 0) {
            document.querySelector(".cart-items").innerHTML = "";
            return;
          }
          list.map((title) => setItems((prev) => [...prev, title]));
        }}
      />
      <div className="cart-items">
        {items.length > 0
          ? items.map((item, index) => (
              <>
                <p key={index}>{item}</p>
                <div></div>
              </>
            ))
          : ""}
      </div>
    </div>
  );
};

export default Cart;
