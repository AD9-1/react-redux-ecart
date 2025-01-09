import React, { useState } from "react";

const Login = ({ setLink, link }) => {
  const [register, setRegister] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <div className="container mx-auto p-4 w-full h-screen flex items-center justify-center">
      <h1 className="text-center text-2xl font-bold mb-4">Welcome to Login</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-blue-300 rounded shadow border mx-auto p-4"
        style={{ width: "50%" }}
      >
        {link==="signup"?<div className="mb-4">
          <label htmlFor="username" className="block font-medium mb-1">
            Username:
          </label>
          <input
            type="text"
            className="form-control w-100 d-block p-2 border border-gray-300 "
            id="username"
            placeholder="Enter Username"
          />
        </div>:null}{}
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-1">
            Email:
          </label>
          <input
            type="email"
            className="form-control w-100 d-block p-2 border border-gray-300 "
            id="email"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-medium mb-1">
            Password:
          </label>
          <input
            type="password"
            className="form-control w-100 d-block p-2 border border-gray-300 "
            id="password"
            placeholder="Enter password"
          />
        </div>
        <div className="w-50 m-auto">
          <button
            type="submit"
            className="btn btn-primary text-white p-2 w-100"
          >
            Login
          </button>
        </div>
        {link === "login" ? (
          <p className="text-center text-gray-500 mt-4">
            Don't have an account?{" "}
            <a handleClick={() => setLink("signup")}>Sign up</a>
          </p>
        ) : (
          <p className="text-center text-silver mt-3">
            {" "}
            Already have an Account?{" "}
            <a handleClick={() => setLink("login")}>Login</a>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
