import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const LocationHandler = ({ setLink }) => {
  const location = useLocation();

  useEffect(() => {

    console.log("Current location:", location.pathname );
    const query = new URLSearchParams(location.search);
    const paymentStatus = query.get("payment");
   console.log("Payment status before:", paymentStatus)
    if (paymentStatus==="success") {
      toast.success("Order created Successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
      });
      query.delete("payment");
      const newSearch=query.toString();
      console.log("New search:", newSearch)
      const newUrl = `${location.pathname}${newSearch ? `?${newSearch}` : ""}`;
      window.history.replaceState(null, "", newUrl);
    } 
  }, [location]);

  return null; // This component doesn't render anything
};

export default LocationHandler;
