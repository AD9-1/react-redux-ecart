import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClearCart } from "./redux/action/action";
const LocationHandler = ({ setLink }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const token = sessionStorage.getItem("token");
  const ItemsInCart = useSelector((state) => state.handlecart);
  const totalPrice = ItemsInCart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  useEffect(() => {
    console.log("Current location:", location.pathname);
    const query = new URLSearchParams(location.search);
    const paymentStatus = query.get("payment");
    console.log("Payment status before:", paymentStatus);
    if (paymentStatus === "success") {
      const orderRa = async () => {
        try {
          const res = await fetch("http://localhost:2000/order/orderplaced", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ ItemsInCart, totalPrice }),
          });
          if (res.ok) {
            const data = await res.json();
            toast.success("Order created Successfully", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
            });
            dispatch(ClearCart());
          }
        } catch (err) {
          console.log("Error in creating order", err);
        }
        query.delete("payment");
        const newSearch = query.toString();
        console.log("New search:", newSearch);
        const newUrl = `${location.pathname}${
          newSearch ? `?${newSearch}` : ""
        }`;
        window.history.replaceState(null, "", newUrl);
      };
      orderRa();
    }
  }, [location, token]);

  return null; // This component doesn't render anything
};

export default LocationHandler;
