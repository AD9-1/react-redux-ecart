import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Products from "./components/Products";
import GotoCart from "./components/GotoCart";
function App() {
  const [link, setLink] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState();
  return (
    <div className="App">
      <Navbar link={link} setLink={setLink} />
      {link === "home" && <Home link={link} setLink={setLink} />}
      {link === "product" && (
        <Products
          link={link}
          setLink={setLink}
          setSelectedProduct={setSelectedProduct}
        />
      )}
      {link === "eachProduct" && <Product id={selectedProduct} link={link} setLink={setLink} />}
      {link==="gotoCart" && <GotoCart/>}
      {link === "about" && <div>About Us Page Content</div>}
      {link === "contact" && <div>Contact Us Page Content</div>}
    </div>
  );
}

export default App;
