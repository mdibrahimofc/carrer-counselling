import React from "react";
import loginImg from "../assets/original-0c14504bd291054d76548cb015dff89a.png"
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="flex h-screen bg-[#E9E9E9]">
      <div className="hidden md:flex w-1/2 justify-center items-center">
        <img
          src={loginImg}
          alt="Graphic"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col justify-center md:shadow-md md:rounded-2xl items-center w-full md:w-1/2 bg-white px-8">
        <div className="w-full max-w-sm space-y-6">
          <h1 className="md:text-4xl text-2xl font-bold text-gray-800 text-center">
            Welcome back!
          </h1>
          <p className="text-sm md:text-xl text-gray-500 text-center">
            Please enter your details
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Password</label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-black"
                />
                <span className="absolute right-3 top-3 text-gray-500 cursor-pointer">
                  👁️
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <a href="#" className="text-gray-600 hover:underline">
                Forgot password?
              </a>
            </div>

            <button className="btn btn-black w-full">Log In</button>

            <button className="btn btn-outline btn-primary w-full mt-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
                alt="Google Logo"
                className="w-5 h-5 mr-2"
              />
              Log in with Google
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-4">
            Don’t have an account?{" "}
            <Link to='/register' className="text-primary hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
