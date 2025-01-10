import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Products from "./components/Products";
import GotoCart from "./components/GotoCart";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import Failure from "./components/Failure";
import { toast, ToastContainer } from "react-toastify";


import LocationHandler from "./components/LocationHandler";
import Login from "./Login";
function App() {
  const [link, setLink] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState();


  return (
    <div className="App">
         <BrowserRouter>
         <ToastContainer/>
      <Navbar link={link} setLink={setLink}/>
      <LocationHandler  setLink={setLink}/>
      {link === "home" && <Home link={link} setLink={setLink} />}
      {link==="gotoCart" && <GotoCart setLink={setLink}/>}
      {link === "product" && (
        <Products
          link={link}
          setLink={setLink}
          setSelectedProduct={setSelectedProduct}
        />
      )}
      {link === "eachProduct" && <Product id={selectedProduct} link={link} setLink={setLink} />}
   
      {link === "about" && <div>About Us Page Content</div>}
      {link === "contact" && <div>Contact Us Page Content</div>}
      {link === "login" && <Login setLink={setLink} link={link}/>}
      {link === "signup" && <Login link={link} setLink={setLink}/>}
   <Routes>
    <Route path="/cancel" element={<Failure link={link} setLink={setLink}/>}/>
   </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
