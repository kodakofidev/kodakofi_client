import { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { authAction } from '../../redux/slices/auth.js';
import constants from '../../configs/constant.js';

function OtpComponent() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isSendingOTP, setIsSendingOTP] = useState(false);
  const [countdown, setCountdown] = useState(0);
  
  const codeInputs = useRef([]);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const email = location.state?.email || '';
  const message = location.state?.message || '';

  useEffect(() => {
    if (!email) {
      navigate('/auth');
    }
    
    if (codeInputs.current[0]) {
      codeInputs.current[0].focus();
    }
    
    if (message) {
      toast.info(message);
    }
  }, [email, navigate, message]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleCodeChange = (e, index) => {
    const value = e.target.value.slice(0, 1);
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5) {
      codeInputs.current[index + 1]?.focus();
    }

    if (e.nativeEvent.inputType === "deleteContentBackward" && index > 0) {
      codeInputs.current[index - 1]?.focus();
    }
  };
  
  const handleVerify = async (e) => {
    e.preventDefault();
    
    const otpCode = code.join("");
    
    if (otpCode.length !== 6) {
      toast.error("Please enter all 6 digits of your verification code");
      return;
    }
    
    setIsVerifying(true);
    
    try {
      const response = await fetch(`${constants.apiUrl}/auth/verify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          otp: otpCode,
          type_id: 1
        }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        toast.success("Email verified successfully!");
        
        setTimeout(() => {
          navigate("/auth");
        }, 2000);
      } else {
        toast.error(data.message || "Verification failed. Please check your code and try again.");
      }
    } catch (err) {
      console.error("OTP verification error:", err);
      toast.error("Failed to verify. Please try again later.");
    } finally {
      setIsVerifying(false);
    }
  };
  
  const handleResendOTP = async () => {
    if (countdown > 0) return;
    
    setIsSendingOTP(true);
    
    try {
      const response = await fetch(`${constants.apiUrl}/auth/otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          type_id: 1
        }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        toast.success("A new verification code has been sent to your email.");
        setCountdown(60);
      } else {
        toast.error(data.message || "Failed to resend verification code.");
      }
    } catch (err) {
      console.error("Resend OTP error:", err);
      toast.error("Failed to resend verification code. Please try again later.");
    } finally {
      setIsSendingOTP(false);
    }
  };

  return (
    <main className="flex flex-col justify-center items-center text-center gap-10 py-10">
      <h1 className="font-bold text-5xl text-(--primary-color) min-lg:pt-40 min-lg:text-6xl">
        Enter OTP
      </h1>
      <p className="text-2xl min-lg:text-4xl">
        We've sent a code to <span className="font-semibold">{email}</span>
      </p>
      
      <form onSubmit={handleVerify} className="flex flex-col items-center gap-8 w-full">
        <section className="flex gap-2 min-lg:gap-10">
          {code.map((digit, index) => (
            <div 
              key={index} 
              className="w-10 h-10 border-2 rounded-2xl text-[16px] font-bold min-lg:text-3xl min-lg:w-25 min-lg:h-25"
            >
              <input
                type="text"
                value={digit}
                onChange={(e) => handleCodeChange(e, index)}
                ref={(el) => (codeInputs.current[index] = el)}
                maxLength={1}
                placeholder="0"
                className="outline-none w-full h-full px-3.5 min-lg:px-10 text-center"
              />
            </div>
          ))}
        </section>
        <button 
          type="submit"
          disabled={isVerifying}
          className="w-3/5 h-15 py-3 rounded-md bg-(--secondary-color) hover:scale-[0.9] hover:text-white duration-500 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] cursor-pointer min-lg:w-1/3 min-lg:h-15"
        >
          {isVerifying ? "VERIFYING..." : "VERIFY"}
        </button>
      </form>
      
      <p className="text-xl text-(--secondary-color) min-lg:text-xl">
        Didn't receive the code?{" "}
        {countdown > 0 ? (
          <span>Resend in {countdown}s</span>
        ) : (
          <button 
            onClick={handleResendOTP}
            disabled={isSendingOTP}
            className="font-semibold underline cursor-pointer hover:font-bold"
          >
            {isSendingOTP ? "Sending..." : "Resend"}
          </button>
        )}
      </p>
      
      <p className="mt-4">
        <button 
          onClick={() => navigate('/auth')}
          className="text-gray-500 hover:underline"
        >
          Back to Login
        </button>
      </p>
    </main>
  );
}

export default OtpComponent;