import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Login = ({ setLink, link }) => {
  const [message, setMessage] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        link === "signup"
          ? "http://localhost:2000/user/signup"
          : "http://localhost:2000/user/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        toast.error(data.message || "An error occurred");
        return;
      }
      toast.success(data.message);
      if(link === "signup")
      {
        setLink("login")
      }
      if(link==="login" && response.ok)
      {
        sessionStorage.setItem("token",data.token)
      }
    } catch (error) {
      console.log("Error:", error);
      toast.error("An error occurred while trying to login/signup");
    }
  };

  return (
    <div className="container mx-auto p-4 w-full h-screen flex items-center justify-center">
      <h1 className="text-center text-2xl font-bold mb-4">
        {link === "signup" ? "New User Sign Up" : "Welcome to Login"}
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-blue-300 rounded shadow border mx-auto p-4"
        style={{ width: "50%" }}
      >
        {link === "signup" ? (
          <div className="mb-4">
            <label
              htmlFor="username"
              className="form-label text-primary fs-4 fw-bolder"
            >
              Username
            </label>
            <input
              type="text"
              className="form-control w-100 d-block p-2 border border-gray-300 "
              name="username"
              placeholder="Enter Username"
              onChange={(e) => handleChange(e)}
              value={formData.username}
            />
          </div>
        ) : null}
        {}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="form-label text-primary fs-4 fw-bolder"
          >
            Email
          </label>
          <input
            type="text"
            className="form-control w-100 d-block p-2 border border-gray-300 "
            name="email"
            placeholder="Enter email"
            onChange={handleChange}
            value={formData.email}
          />
        </div>
        <div className="mb-4 position-relative">
          <label
            htmlFor="password"
            className="form-label text-primary fs-4 fw-bolder"
          >
            Password
          </label>
          <input
            type={isPasswordVisible?"text":"password"}
            className="form-control w-100 d-block p-2 border border-gray-300 "
            name="password"
            placeholder="Enter password"
            onChange={(e) => handleChange(e)}
            value={formData.password}
            
          />
            <span
            className="position-absolute bottom-50 top-50 end-0 p-2"
            style={{ cursor: "pointer" }}
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            {" "}
            {isPasswordVisible ?<FaEye />: <FaEyeSlash /> }
          </span>
        
        </div>
        <div className="w-50 m-auto">
          <button
            type="submit"
            className="btn btn-primary text-white p-2 w-100"
          >
            {link === "signup" ? "Sign up" : "Login"}
          </button>
        </div>
        {link === "login" ? (
          <p className="text-center text-gray-500 mt-4">
            Don't have an account?{" "}
            <a
              className="text-decoration-underline cursor-pointer"
              onClick={() => setLink("signup")}
            >
              Sign up
            </a>
          </p>
        ) : (
          <p className="text-center text-silver mt-3">
            {" "}
            Already have an Account?{" "}
            <a
              className="text-underline pointer"
              onClick={() => setLink("login")}
            >
              Login
            </a>
          </p>
        )}
      </form>
      {message && toast.error(message)}
    </div>
  );
};

export default Login;
