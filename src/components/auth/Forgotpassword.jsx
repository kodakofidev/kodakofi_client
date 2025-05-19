import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from 'react-toastify';
import mail from "/icons/mail.svg";
import logo from "/Logo.svg";
import forgotBG from "/forgotpwd.svg?url";
import constants from "../../configs/constant.js";
import password from "/icons/Password.svg";
import eyeslash from "/icons/EyeSlash.svg";
import eye from "/icons/eye.svg";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formTouched, setFormTouched] = useState(false);
  const [emailError, setEmailError] = useState("");
  
  // Modal state and form fields
  const [showResetModal, setShowResetModal] = useState(false);
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const [otpError, setOtpError] = useState("");
  const [passwordError, setPasswordError] = useState("");

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
        toast.success("Verification code sent. Please check your email!");
        
        // Instead of navigating to verify page, show reset modal
        setShowResetModal(true);
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
  
  const validatePasswordReset = () => {
    let isValid = true;
    
    if (!otp || otp.length !== 6) {
      setOtpError("Please enter a valid 6-digit verification code");
      isValid = false;
    } else {
      setOtpError("");
    }
    
    if (!newPassword || newPassword.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      isValid = false;
    } else if (newPassword !== confirmPassword) {
      setPasswordError("Passwords do not match");
      isValid = false;
    } else {
      setPasswordError("");
    }
    
    return isValid;
  };
  
  const handleResetPassword = async (e) => {
    e.preventDefault();
    
    if (!validatePasswordReset()) {
      return;
    }
    
    setIsResetting(true);
    
    try {
      const response = await fetch(`${constants.apiUrl}/auth/reset-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          otp: otp,
          password: newPassword
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Password has been reset successfully!");
        setShowResetModal(false);
        
        // Navigate to login page after successful reset
        setTimeout(() => {
          navigate("/auth");
        }, 1500);
      } else {
        toast.error(data.message || "Failed to reset password. Please try again.");
      }
    } catch (err) {
      console.error("Reset password error:", err);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsResetting(false);
    }
  };
  
  const handleOtpChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '').slice(0, 6);
    setOtp(value);
    if (otpError) setOtpError("");
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
                ) : "Send Verification Code"}
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
      
      {/* Reset Password Modal */}
      {showResetModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md m-4 relative animate-fadeIn shadow-2xl">
            <button 
              onClick={() => setShowResetModal(false)} 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h2 className="text-2xl font-bold mb-1 text-(--primary-color)">Reset Your Password</h2>
            <p className="text-gray-500 text-sm mb-4">
              Enter the verification code sent to <span className="font-semibold">{email}</span> and your new password
            </p>
            
            <form onSubmit={handleResetPassword} className="space-y-4">
              <div>
                <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-1">
                  Verification Code
                </label>
                <div className={`flex items-center gap-3 p-3 border rounded-lg bg-[#FCFDFE] transition-all duration-200 ${otpError ? 'border-red-400' : 'border-gray-200 focus-within:border-[#FF8906]'}`}>
                  <input
                    type="text"
                    id="otp"
                    value={otp}
                    onChange={handleOtpChange}
                    placeholder="Enter 6-digit code"
                    className="outline-none w-full bg-transparent"
                    maxLength={6}
                  />
                </div>
                {otpError && (
                  <p className="text-red-500 text-xs mt-1">{otpError}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  New Password
                </label>
                <div className={`flex items-center gap-3 p-3 border rounded-lg bg-[#FCFDFE] transition-all duration-200 ${passwordError ? 'border-red-400' : 'border-gray-200 focus-within:border-[#FF8906]'}`}>
                  <img src={password} alt="Password" className="w-5 h-5" />
                  <input
                    type={showNewPassword ? "text" : "password"}
                    id="newPassword"
                    value={newPassword}
                    onChange={(e) => {
                      setNewPassword(e.target.value);
                      if (passwordError) setPasswordError("");
                    }}
                    placeholder="Enter new password"
                    className="outline-none w-full bg-transparent"
                  />
                  <img
                    src={showNewPassword ? eyeslash : eye}
                    alt={showNewPassword ? "Hide password" : "Show password"}
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="w-5 h-5 cursor-pointer hover:opacity-70 transition-opacity"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <div className={`flex items-center gap-3 p-3 border rounded-lg bg-[#FCFDFE] transition-all duration-200 ${passwordError ? 'border-red-400' : 'border-gray-200 focus-within:border-[#FF8906]'}`}>
                  <img src={password} alt="Password" className="w-5 h-5" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                      if (passwordError) setPasswordError("");
                    }}
                    placeholder="Confirm new password"
                    className="outline-none w-full bg-transparent"
                  />
                  <img
                    src={showConfirmPassword ? eyeslash : eye}
                    alt={showConfirmPassword ? "Hide password" : "Show password"}
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="w-5 h-5 cursor-pointer hover:opacity-70 transition-opacity"
                  />
                </div>
                {passwordError && (
                  <p className="text-red-500 text-xs mt-1">{passwordError}</p>
                )}
              </div>
              
              <button 
                type="submit"
                disabled={isResetting}
                className="w-full py-3 bg-[#FF8906] text-black font-medium rounded-lg hover:bg-[#E07C05] active:scale-[0.98] transition-all duration-200 flex justify-center items-center mt-4"
              >
                {isResetting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Resetting...
                  </>
                ) : "Reset Password"}
              </button>
              
              <p className="text-xs text-center text-gray-500 mt-2">
                Didn't receive the code? <button 
                  type="button"
                  onClick={handleSubmit}
                  className="text-[#FF8906] font-medium hover:underline"
                >
                  Resend
                </button>
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default ForgotPassword;
