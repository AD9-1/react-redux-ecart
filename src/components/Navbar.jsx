import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { useSelector} from "react-redux";


export default function Navbar({ link, setLink }) {
  const cartItems = useSelector((state) => state.handlecart);
const tot=cartItems.reduce((acc,item)=>acc+item.quantity,0)

  return (
    <nav className="navbar navbar-expand-lg bg-light shadow-sm py-3">
      <div className="container">
        <a className="navbar-brand fs-4 fw-bold" href="#">
          Ecart
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className={`nav-link ${link == "home" ? `active` : ``}`}
                onClick={() => setLink("home")}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${link === "product" ? `active` : ``}`}
                onClick={() => setLink("product")}
              >
                Products
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${link === "about" ? `active` : ``}`}
                onClick={() => setLink("about")}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${link === "contact" ? `active` : ``}`}
                onClick={() => setLink("contact")}
              >
                Contacts
              </a>
            </li>
          </ul>
          <div className="buttons">
            <button className="btn btn-secondary me-2" type="submit" onClick={()=>setLink("login")}>
              Login
              <FontAwesomeIcon className="ms-2" icon={faArrowRightToBracket} />
            </button>
            <button className="btn btn-outline-dark me-2" type="submit">
              Sign-up
              <FontAwesomeIcon className="ms-2" icon={faCircleUser} />
            </button>
            <button className="btn btn-outline-success" onClick={()=>setLink("gotoCart")} type="submit" >
              Cart({tot})
              <FontAwesomeIcon className="ms-2" icon={faCartShopping} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
