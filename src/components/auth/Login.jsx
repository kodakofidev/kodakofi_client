import React, { useState } from "react";
import { toast } from 'react-toastify';
import loginBG from "/loginBG.svg";
import logo from "/Logo.svg";
import mail from "/icons/mail.svg";
import password from "/icons/Password.svg";
import eyeslash from "/icons/EyeSlash.svg";
import eye from "/icons/eye.svg";
import fbIcon from "/icons/fb_icon.svg";
import googleIcon from "/icons/google_icon.svg";
import { Link, useNavigate } from "react-router";
import constants from "../../configs/constant.js";
import { useDispatch } from "react-redux";
import { authAction } from "../../redux/slices/auth.js";
import { profileAction } from "../../redux/slices/profile.js"; // Add this import

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [email, setEmail] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [formTouched, setFormTouched] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    const errors = {};
    if (!email) errors.email = "Email is required";
    if (!passwordValue) errors.password = "Password is required";
    
    // Simple email validation
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Please enter a valid email";
    }
    
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFieldChange = (field, value) => {
    if (field === 'email') setEmail(value);
    if (field === 'password') setPasswordValue(value);
    
    if (formTouched) {
      // Clear specific field error when user types
      setFieldErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  };

  const loginGoogle = () => {
    setIsLoggingIn(true);
    
    try {
      window.location.href = `${constants.apiUrl}/auth/google`;
    } catch (err) {
      console.error("Failed to start Google login:", err);
      toast.error("Failed to start Google authentication. Please try again.");
      setIsLoggingIn(false);
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    setFormTouched(true);
    
    if (!validateForm()) {
      return; // Stop if validation fails
    }
    
    setIsLoggingIn(true);
    
    try {
      const response = await fetch(`${constants.apiUrl}/auth`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: passwordValue
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        toast.success("Login successful!");
        
        // Use the actual user ID from the response
        dispatch(authAction.addAuth({
          user: {
            id: data.data.id,
            role: data.data.role || "user",
            token: data.data.token,
            email: email,
            name: data.data.fullname || email.split("@")[0]
          },
          isLogin: true
        }));
        
        // Fetch user profile data after login
        dispatch(profileAction.fetchProfileStart());
        try {
          const profileResponse = await fetch(`${constants.apiUrl}/profile`, {
            headers: {
              'Authorization': `Bearer ${data.data.token}`
            }
          });
          
          if (profileResponse.ok) {
            const profileData = await profileResponse.json();
            if (profileData.data) {
              dispatch(profileAction.fetchProfileSuccess(profileData.data));
            }
          } else {
            console.error("Failed to fetch profile data");
          }
        } catch (profileError) {
          console.error("Profile fetch error:", profileError);
          dispatch(profileAction.fetchProfileFailure("Failed to load profile"));
        }
        
        if (data.data.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      } else {
        // Check if this is a verification error
        if (data.message && data.message.includes("Email not verified")) {
          toast.info("Please verify your email before logging in.");
          
          navigate("/auth/verify", { 
            state: { 
              email: email,
              message: "Please verify your email before logging in." 
            } 
          });
          return;
        }
        
        toast.error(data.message || "Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      toast.error("An error occurred during login. Please try again later.");
    } finally {
      setIsLoggingIn(false);
    }
  }

  return (
    <>
      {/* Maintain original layout: smaller background on left, larger form on right */}
      <main className="flex gap-5 max-lg:bg-[url(/loginBG.svg)] bg-no-repeat bg-cover lg:flex h-screen">
        {/* Keep original background image on the left - smaller */}
        <img src={loginBG} className="max-lg:hidden w-auto" />
        
        {/* Form section on the right - larger */}
        <section className="px-5 w-full py-10 bg-white/80 lg:px-10 lg:py-20 flex items-center">
          <div className="w-full max-w-md mx-auto">
            {/* Logo with interaction */}
            <img
              src={logo}
              alt="Koda Kofi"
              onClick={() => navigate("/")}
              className="h-10 cursor-pointer mb-6 hover:scale-105 transition-transform duration-200"
            />
            
            {/* Form with validation message */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-(--primary-color) mb-2">Welcome Back!</h1>
              {!formTouched ? (
                <p className="text-gray-500 text-sm">Please sign in to continue</p>
              ) : Object.keys(fieldErrors).length > 0 ? (
                <p className="text-red-500 text-sm">Please fill out the form correctly</p>
              ) : null}
            </div>
            
            <form onSubmit={handleLogin} className="space-y-5">
              {/* Email input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <div className={`flex items-center gap-3 p-3 border rounded-lg bg-[#FCFDFE] transition-all duration-200 ${fieldErrors.email ? 'border-red-400' : 'border-gray-200 focus-within:border-[#FF8906]'}`}>
                  <img src={mail} alt="Email" className="w-5 h-5" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => handleFieldChange('email', e.target.value)}
                    placeholder="Enter your email"
                    className="outline-none w-full bg-transparent"
                  />
                </div>
                {fieldErrors.email && (
                  <p className="text-red-500 text-xs mt-1">{fieldErrors.email}</p>
                )}
              </div>
              
              {/* Password input */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <Link
                    to="/auth/forgotpassword"
                    className="text-xs font-medium text-(--secondary-color) hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className={`flex items-center gap-3 p-3 border rounded-lg bg-[#FCFDFE] transition-all duration-200 ${fieldErrors.password ? 'border-red-400' : 'border-gray-200 focus-within:border-[#FF8906]'}`}>
                  <img src={password} alt="Password" className="w-5 h-5" />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={passwordValue}
                    onChange={(e) => handleFieldChange('password', e.target.value)}
                    placeholder="Enter your password"
                    className="outline-none w-full bg-transparent"
                  />
                  <img
                    src={showPassword ? eyeslash : eye}
                    alt={showPassword ? "Hide password" : "Show password"}
                    onClick={togglePasswordVisibility}
                    className="w-5 h-5 cursor-pointer hover:opacity-70 transition-opacity"
                  />
                </div>
                {fieldErrors.password && (
                  <p className="text-red-500 text-xs mt-1">{fieldErrors.password}</p>
                )}
              </div>
              
              {/* Login button */}
              <button 
                type="submit"
                disabled={isLoggingIn}
                className="w-full py-3 bg-(--secondary-color) text-black font-medium rounded-lg hover:bg-[#E07C05] active:scale-[0.98] transition-all duration-200 transform flex justify-center items-center"
              >
                {isLoggingIn ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing in...
                  </>
                ) : "Sign In"}
              </button>
              
              {/* Register link */}
              <div className="text-center">
                <p className="text-gray-600">
                  Don't have an account?{" "}
                  <Link
                    to="/auth/register"
                    className="text-(--secondary-color) font-medium hover:underline"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
              
              {/* Divider */}
              <div className="relative flex items-center gap-2 py-3">
                <div className="flex-grow h-px bg-gray-300"></div>
                <span className="text-gray-600 text-sm">or continue with</span>
                <div className="flex-grow h-px bg-gray-300"></div>
              </div>
              
              {/* Social login options */}
              <div className="flex justify-evenly">
                <button
                  type="button"
                  onClick={loginGoogle}
                  className="relative bg-white/80 p-5 flex gap-2.5 justify-center rounded-[15px] shadow-[0_2px_10px_rgba(0,0,0,0.2)] hover:scale-[0.95] duration-500 cursor-pointer lg:w-2/5 lg:p-3"
                >
                  <img src={googleIcon} alt="google" />
                  <p className="max-lg:hidden">Google</p>
                </button>

                <button
                  type="button"
                  className="relative bg-white/80 p-5 flex gap-2.5 justify-center rounded-[15px] shadow-[0_2px_10px_rgba(0,0,0,0.2)] hover:scale-[0.95] duration-500 cursor-pointer lg:w-2/5 lg:p-3"
                >
                  <img src={fbIcon} alt="facebook" />
                  <p className="max-lg:hidden">Facebook</p>
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default Login;
