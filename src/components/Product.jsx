import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

import AddToCart from "./AddToCart";
import { useSelector } from "react-redux";
import Modal from "./Modal";
const Product = ({ id, link, setLink }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const ItemsInCart = useSelector((state) => state.handlecart);

  const token = sessionStorage.getItem("token");
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, [id]);

  const handleGoto = () => {
    if (ItemsInCart.length === 0) {
      setModal(true);
    } else setLink("gotoCart");
  };
  const Loading = () => {
    return <div>Loading...</div>;
  };
  const ShowProduct = () => {
    return (
      <>
        {product &&        
         <div className="d-flex justify-content-between gap-3">
            <div>
              <img src={product.image} height="400px" width="300px" />
            </div>
            <div>
              <h4 className="text-black text-uppercase display-9">
                {product.category}
              </h4>
              <h3 className="display-6">{product.title}</h3>
              <p className="lead d-flex align-items-center">
                <section>
                  Rating {product.rating && product.rating.rate}
                </section>
                <FontAwesomeIcon icon={faStar} style={{ fontSize: "12px" }} />
              </p>
              <h3 className="display-8">${product.price}</h3>
              <p className="display-7">{product.description}</p>
              <AddToCart token={token} cartItem={product} />
              <button className="btn btn-dark" onClick={handleGoto}>
                Go To Cart
              </button>
            </div>
          </div>
  }
        {modal && <Modal setModal={setModal} />}
      </>
    );
  };
  return (
    <div className="container">
      <div className="row mt-4 py-4">
        {loading ? <Loading /> : <ShowProduct />}
      </div>
    </div>
  );
};

export default Product;
