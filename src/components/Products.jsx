import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";


const Products = ({ link, setLink, setSelectedProduct }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const [filteredProducts, setFilteredProducts] = useState([]);
  console.log("link in products", link);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setLoading(false);
      setProducts(data);
      setFilteredProducts(data);
      console.log(data);
    };
    fetchProducts();
  }, []);
 
  const handleClick = (id) => {
    setSelectedProduct(id);
    setLink("eachProduct");
  };
  const Loading = () => {
    return (
      <div >
       Loading...
      </div>
    );
  };
  const filteredData = (category) => {
    const filtered = products.filter(
      (product) => product.category === category
    );
    setFilteredProducts(filtered);
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="button d-flex justify-content-center py-2">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFilteredProducts(products)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filteredData("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filteredData("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filteredData("electronics")}
          >
            Electronics
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filteredData("jewelery")}
          >
            Jewellery
          </button>
        </div>
        <div className="d-flex flex-wrap justify-content-center gap-3 my-4">
          {filteredProducts?.map((product) => {
            return (
              <div className="col-md-3">
                <div className="card  p-4">
                  <img
                    src={product.image}
                    className="card-img-top"
                    height="200px"
                  />
                  <div className="card-body">
                    <h5 className="card-title dispaly-4 mb-2">
                      {product.title.substring(0, 11)}
                    </h5>
                    <p className="card-text">
                      <span className="fw-bolder">Price :</span>${product.price}
                    </p>
                    <button
                      onClick={() => handleClick(product.id)}
                      className="btn btn-warning"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  };
  return (
    <div className="container my-5">
      <div>
        <div className="col-12">
          <h1 className="display-6 fw-4 text-center">Latest Products</h1>
          <hr />
        </div>
      </div>
      <div className="flex">{loading ? <Loading /> : <ShowProducts />}</div>
    </div>
  );
};

export default Products;
