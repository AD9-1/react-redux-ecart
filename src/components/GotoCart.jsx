import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./GotoCart.css";
import { loadStripe } from "@stripe/stripe-js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GotoCart = ({ setLink, link }) => {
  const ItemsInCart = useSelector((state) => state.handlecart);
  const token = sessionStorage.getItem("token");
  const dispatch = useDispatch();
  const totalPrice = ItemsInCart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  useEffect(() => {
    if (totalPrice === 0) setLink("home");
  }, [totalPrice]);

  useEffect(() => {
    const fetchCart = async () => {
      const res = await fetch("http://localhost:2000/user/getCart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        dispatch({ type: "LOADCART", payload: data.data });
      }
    };
    fetchCart();
  }, [token]);

  const handleRemove = async (cartItem) => {
    dispatch({ type: "REMOVEITEM", payload: cartItem });
    try {
      if (token) {
        const res = await fetch("http://localhost:2000/user/removeFromCart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ cartItem }),
        });
        
      }
    } catch (err) {
      toast.error("Error removing from cart", err);
    }
  };

  const handleAdd = async (cartItem) => {
    dispatch({ type: "ADDITEM", payload: cartItem });
    try {
      if (token) {
        await fetch("http://localhost:2000/user/addToCart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ cartItem }),
        });
      }
    } catch (err) {
      toast.error("Error adding into cart", err);
    }
  };

  const makePayment = async () => {
    if (!token) {
      alert("Please login first");
      setLink("login");
      return;
    }
    const stripe = await loadStripe(
      "pk_test_51OhJiKEbJSAocZFKhnUrTUYuuLGA9WZg7pkV8ygQnqwEqZKuEDtph9GkFTeVv4gpTR0YtBwclu3VomKZmQ2OBSdl00JBjvRPG3"
    );
    const body = { products: ItemsInCart };
    const headers = { "Content-Type": "application/json" };

    try {
      const res = await fetch("http://localhost:2000/stripe", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      });
      const session = await res.json();
      if (session && session.id) {
        const result = await stripe.redirectToCheckout({
          sessionId: session.id,
        });

        if (result.error) {
          toast.error("Payment failed, please try again", result.error.message);
        }
      }
    } catch (error) {
      console.log("There are some errors:", error);
    }
  };
  return (
    <div className="container">
      {ItemsInCart.map((cartItem) => {
        return (
          <div className="container-box" key={cartItem.id}>
            <section className="container-box-image">
              <img src={cartItem.image} />
            </section>
            <section className="container-box-description">
              <h2>{cartItem.title}</h2>
              <p className="cartItem-value">
                {cartItem.quantity}x{cartItem.price}
                <span className="cartItem-price">
                  ={cartItem.quantity * cartItem.price}
                </span>
              </p>
              <button
                className="btn btn-outline-danger me-2"
                onClick={() => handleRemove(cartItem)}
              >
                -
              </button>
              <button
                className="btn btn-outline-success"
                onClick={() => handleAdd(cartItem)}
              >
                +
              </button>
            </section>
          </div>
        );
      })}
      <hr />
      <article>
        <h4>Total Price: {totalPrice}</h4>
        <button className="btn btn-warning" onClick={makePayment}>
          Checkout
        </button>
      </article>
    </div>
  );
};

export default GotoCart;
