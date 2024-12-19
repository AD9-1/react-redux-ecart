import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./GotoCart.css"
const GotoCart = () => {
  const cartItems = useSelector((state) => state.handlecart);
  const dispatch = useDispatch();
  const handleRemove = (cartItem) => {
    dispatch({ type: "REMOVEITEM", payload: cartItem });
  };
  const handleAdd = (cartItem) => {
    dispatch({ type: "ADDITEM", payload: cartItem });
  };
  return (
    <div className="container">
      {cartItems.map((cartItem) => {
        return (
          <div className="container-box" key={cartItem.id}>
            <section className="container-box-image">
              <img src={cartItem.image} />
            </section>
            <section className="container-box-description">
              <h2>{cartItem.title}</h2>
              <p className="cartItem-value" >
                {cartItem.quantity}x{cartItem.price}
                <span className="cartItem-price">={cartItem.quantity * cartItem.price}</span>
              </p>
              <button className="btn btn-outline-danger me-2" onClick={() => handleRemove(cartItem)}>-</button>
              <button className="btn btn-outline-success"onClick={() => handleAdd(cartItem)}>+</button>
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default GotoCart;
