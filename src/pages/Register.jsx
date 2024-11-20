import React, { useContext, useState } from "react";
import { AuthContext } from "../contextapi/ContextApi";
import loginImg from "../assets/original-0c14504bd291054d76548cb015dff89a.png";
import { Link } from "react-router-dom";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import swal from 'sweetalert';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [uppercase, setUppercase] = useState(false)
  const { createAccount } = useContext(AuthContext);
  const [password, setPassword] = useState('')
  const handleRegister = (e) => {
    e.preventDefault();
    const { name, photo, checkbox, email, password } = e.target;
    if (!checkbox.checked) {
      swal("You must accept our terms and condition to procceed");
      return;
    }
    createAccount(email.value, password.value).then((res) => {
      console.log(res.user);
    });
  };
  const handleChange = (e) => {
    const passwordValue = e.target.value
    console.log(passwordValue);
    setPassword(passwordValue)
    console.log(password);
  }
  const handlePasswordValidate = () => {
    const regexU = /^(?=.*[A-Z]).+$/; // Regex for at least one uppercase letter
    if (regexU.test(password)) { // Use regex.test() to check the password
      setUppercase(true);
    } else {
      setUppercase(false);
    }
  };
  
  return (
    <div className="flex h-screen bg-[#E9E9E9]">
      <div className="hidden md:flex w-1/2 justify-center items-center">
        <img src={loginImg} alt="Graphic" className="object-cover" />
      </div>

      <div className="flex flex-col justify-center md:shadow-md md:rounded-2xl items-center w-full md:w-1/2 bg-white px-8">
        <div className="w-full max-w-sm space-y-6">
          <h1 className="md:text-4xl text-2xl font-bold text-gray-800 text-center">
            Welcome back!
          </h1>
          <p className="text-sm md:text-xl text-gray-500 text-center">
            Please enter your details
          </p>

          <form className="space-y-4" onSubmit={handleRegister}>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                User name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your user name"
                required
                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                PhotoURL
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter your photo url"
                required
                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onClick={handlePasswordValidate}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-black"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-xl text-gray-500 cursor-pointer"
                >
                  {showPassword ? <FaEyeSlash /> : <FaRegEye />}
                </span>
              </div>
              {
                password && <div>
                  <p className={uppercase && 'text-green-600'}>Must have an Uppercase letter in the password</p>
                </div>
              }
            </div>

            <div>
              <label className="flex items-center">
                <input type="checkbox" name="checkbox" className="mr-2" />I
                agree to the{" "}
                <span className="text-green-500 ml-1">
                  Terms and Conditions
                </span>
                .
              </label>
            </div>

            <button className="btn btn-primary w-full">Sign Up</button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
