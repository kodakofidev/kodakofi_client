import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { authAction } from "../../redux/slices/auth.js";
import registerBG from "/registerBG.svg";
import logo from "/Logo.svg";
import profileIcon from "/icons/Profile.svg";
import mail from "/icons/mail.svg";
import password from "/icons/Password.svg";
import eyeslash from "/icons/EyeSlash.svg";
import eye from "/icons/eye.svg";
import fbIcon from "/icons/fb_icon.svg";
import googleIcon from "/icons/google_icon.svg";
import constants from "../../configs/constant.js";
import { toast } from 'react-toastify';

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showCheckPassword, setCheckShowPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleCheckPasswordVisibility = () => {
    setCheckShowPassword(!showCheckPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate input
    if (!fullName || !email || !passwordValue || !confirmPassword) {
      toast.error("All fields are required");
      return;
    }
    
    if (passwordValue !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    
    if (passwordValue.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return;
    }
    
    setIsLoading(true);
    
    try {
      const response = await fetch(`${constants.apiUrl}/auth/new`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: passwordValue,
        }),
      });
      
      const data = await response.json();
      console.log("Registration response:", data);
      
      if (response.ok) {
        toast.success("Registration successful! Please verify your email.");
        
        navigate("/auth/verify", { 
          state: { 
            email: email,
            message: data.message || "Please check your email for verification code." 
          } 
        });
      } else {
        toast.error(data.message || "Registration failed");
      }
    } catch (err) {
      console.error("Registration error:", err);
      toast.error("Failed to register. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <main className="flex gap-5 max-lg:bg-[url(/registerBG.svg)] bg-no-repeat bg-cover lg:flex h-100vh">
        <img src={registerBG} className="max-lg:hidden" />
        <section className="px-5 w-full py-10 bg-white/80 lg:px-10 lg:py-20 flex items-center">
          <div className="w-full max-w-md mx-auto">
            <img
              src={logo}
              alt="Koda Kofi"
              onClick={() => navigate("/")}
              className="h-10 cursor-pointer mb-6 hover:scale-105 transition-transform duration-200"
            />
            
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-(--primary-color) mb-2">Create Account</h1>
              <p className="text-gray-500 text-sm">Please fill out the form to register</p>
            </div>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 py-5">
              {/* INPUT NAME */}
              <div>
                <label htmlFor="fullname" className="text-[14px] font-semibold">
                  Full Name
                </label>
                <div className="flex gap-3.5 p-3.5 mt-3.5 border rounded-md bg-[#FCFDFE]">
                  <img
                    src={profileIcon}
                    alt="full name"
                    className="cursor-pointer"
                  />
                  <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter Your Full name"
                    className="outline-none w-full h-full"
                  />
                </div>
              </div>
              {/* INPUT EMAIL */}
              <div>
                <label htmlFor="email" className="text-[14px] font-semibold">
                  Email
                </label>
                <div className="flex gap-3.5 p-3.5 mt-3.5 border rounded-md bg-[#FCFDFE]">
                  <img src={mail} alt="email" className="cursor-pointer" />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Your Email"
                    className="outline-none w-full h-full"
                  />
                </div>
              </div>
              {/* INPUT PASSWORD */}
              <div>
                <label htmlFor="password" className="text-[14px] font-semibold">
                  Password
                </label>
                <div className="flex gap-3.5 p-3.5 mt-3.5 border rounded-md bg-[#FCFDFE]">
                  <img src={password} alt="password" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    value={passwordValue}
                    onChange={(e) => setPasswordValue(e.target.value)}
                    placeholder="Enter Your Password"
                    className="outline-none w-full h-full"
                  />
                  <img
                    src={showPassword ? eyeslash : eye}
                    alt={showPassword ? "show password" : "hide password"}
                    onClick={togglePasswordVisibility}
                    className="cursor-pointer"
                  />
                </div>
              </div>
              {/* CONFIRM PASSWORD*/}
              <div>
                <label htmlFor="confirmPassword" className="text-[14px] font-semibold">
                  Confirm Password
                </label>
                <div className="flex gap-3.5 p-3.5 mt-3.5 border rounded-md bg-[#FCFDFE]">
                  <img src={password} alt="confirm password" />
                  <input
                    type={showCheckPassword ? "text" : "password"}
                    name="confirmPassword"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Enter Your Password Again"
                    className="outline-none w-full h-full"
                  />
                  <img
                    src={showCheckPassword ? eyeslash : eye}
                    alt={showCheckPassword ? "show password" : "hide password"}
                    onClick={toggleCheckPasswordVisibility}
                    className="cursor-pointer"
                  />
                </div>
              </div>

              <button 
                type="submit"
                disabled={isLoading}
                className="w-full py-2.5 rounded-md bg-(--secondary-color) hover:scale-[0.9] hover:text-white duration-500 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] cursor-pointer"
              >
                {isLoading ? "Registering..." : "Register"}
              </button>
              <p className="text-center">
                Have An Account?{" "}
                <Link
                  to="/auth"
                  className="text-(--secondary-color) cursor-pointer hover:font-semibold"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default Register;
