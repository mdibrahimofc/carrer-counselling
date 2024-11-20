import React, { useContext, useState } from "react";
import loginImg from "../assets/cristofer-maximilian-NSKP7Gwa_I0-unsplash.jpg"
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../contextapi/ContextApi";
import swal from "sweetalert";
import { Helmet } from "react-helmet";
import { Navigate, useLocation } from 'react-router-dom';
const Login = () => {
  const {login, signInGoogle, user} = useContext(AuthContext)
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation()
 const navigate = useNavigate()

 const handleGoogleLogin = () => {
  signInGoogle()
  .then(res => {
    console.log(location);
    navigate(location?.state?location?.state:'/')
  })
 }
  const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password);
        login(email, password)
        .then(res => {
          console.log(res);
          navigate(location?.state?location?.state:'/')
        })
        .catch(err => {
          swal(err.message)
        })
  }
  // if(user){
  //   return <Navigate state={location?.pathname} replace to={`${location?.pathname?location?.pathname:'/'}`}></Navigate>
  //   }
  return (
    <div className="flex h-screen bg-[#E9E9E9]">
      <Helmet>
        <title>Login || Carrer Goals</title>
    </Helmet>
      <div className="hidden md:flex w-1/2 justify-center items-center">
        <img
          src={loginImg}
          alt="Graphic"
          className="w-full h-full object-contain"
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

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                required
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  placeholder="Enter your password"
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-black"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-xl text-gray-500 cursor-pointer"
                >
                  {showPassword ? <FaEyeSlash /> : <FaRegEye />}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <a href="#" className="text-gray-600 hover:underline">
                Forgot password?
              </a>
            </div>

            <button className="btn btn-black w-full">Log In</button>
          </form>

          <div>
          <button onClick={handleGoogleLogin} className="btn btn-outline btn-primary w-full mt-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
                alt="Google Logo"
                className="w-5 h-5 mr-2"
              />
              Log in with Google
            </button>
          </div>

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
