import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from 'react-toastify';
import mail from "/icons/mail.svg";
import logo from "/Logo.svg";
import forgotBG from "/forgotpwd.svg?url";
import constants from "../../configs/constant.js";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formTouched, setFormTouched] = useState(false);
  const [emailError, setEmailError] = useState("");

  const navigate = useNavigate();

  const validateEmail = () => {
    if (!email) {
      setEmailError("Email is required");
      return false;
    }
    
    // Simple email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address");
      return false;
    }
    
    setEmailError("");
    return true;
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (formTouched) {
      // Clear error when typing
      setEmailError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormTouched(true);
    
    if (!validateEmail()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${constants.apiUrl}/auth/otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          type_id: 2 // 2 for password reset
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Password reset instructions sent. Check your email!");
        
        setTimeout(() => {
          navigate("/auth/verify", { 
            state: { 
              email: email,
              message: "Enter the verification code to reset your password."
            } 
          });
        }, 2000);
      } else {
        toast.error(data.message || "Failed to send reset instructions.");
      }
    } catch (err) {
      console.error("Forgot password error:", err);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <main className="flex gap-5 max-lg:bg-[url(/forgotpwd.svg)] bg-no-repeat bg-cover lg:flex h-screen">
        {/* Keep original background image on the left - smaller */}
        <img src={forgotBG} className="max-lg:hidden w-auto" />
        
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
            
            {/* Form heading */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-(--primary-color) mb-2">Forgot Password</h1>
              <p className="text-gray-500 text-sm">
                Enter your email address and we'll send you instructions to reset your password
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <div className={`flex items-center gap-3 p-3 border rounded-lg bg-[#FCFDFE] transition-all duration-200 ${emailError ? 'border-red-400' : 'border-gray-200 focus-within:border-[#FF8906]'}`}>
                  <img src={mail} alt="Email" className="w-5 h-5" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email address"
                    className="outline-none w-full bg-transparent"
                    autoComplete="email"
                  />
                </div>
                {emailError && (
                  <p className="text-red-500 text-xs mt-1">{emailError}</p>
                )}
              </div>
              
              {/* Submit button */}
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-[#FF8906] text-black font-medium rounded-lg hover:bg-[#E07C05] active:scale-[0.98] transition-all duration-200 flex justify-center items-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : "Reset Password"}
              </button>
              
              {/* Back to login link */}
              <div className="text-center mt-4">
                <div className="flex items-center justify-center gap-1">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  <Link
                    to="/auth"
                    className="text-gray-600 hover:text-[#FF8906] font-medium text-sm"
                  >
                    Back to Login
                  </Link>
                </div>
              </div>
              
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default ForgotPassword;
