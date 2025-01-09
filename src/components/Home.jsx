import React from "react";


const Home = () => {
  return (
    <div className="p-relative">
      <div className="card text-bg-0">
        <img src="assets/fashion.jpg" className="card-img" height="500px" />
        <div className="card-img-overlay d-flex bg-red align-items-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bold text-white mb-0">
              NEW ARRIVALS
            </h5>
            <p className="card-text lead fs-2">Check out</p>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Home;
