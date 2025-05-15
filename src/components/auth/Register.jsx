import React, { useState } from "react";
import { Link } from "react-router";
import registerBG from "/registerBG.svg";
import logo from "/Logo.svg";
import profileIcon from "/icons/Profile.svg";
import mail from "/icons/mail.svg";
import password from "/icons/Password.svg";
import eyeslash from "/icons/EyeSlash.svg";
import eye from "/icons/eye.svg";
import fbIcon from "/icons/fb_icon.svg";
import googleIcon from "/icons/google_icon.svg";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showCheckPassword, setCheckShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleCheckPasswordVisibility = () => {
    setCheckShowPassword(!showCheckPassword);
  };

  return (
    <>
      <main className="flex gap-5 max-lg:bg-[url(/registerBG.svg)] bg-no-repeat bg-cover lg:flex">
        <img src={registerBG} className="max-lg:hidden" />
        <section className="px-5 w-full py-20 bg-white/80 lg:px-10">
          <img src={logo} alt="coffee shop" />
          <form action="" className="flex flex-col gap-3.5 py-5">
            <h1 className="text-[18px] text-(--primary-color)">Register</h1>
            <p className="text-[14px]">Fill out the form correctly</p>
            {/* INPUT NAME`` */}
            <div>
              <label htmlFor="" className="text-[14px] font-semibold">
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
                  placeholder="Enter Your Full name"
                  className="outline-none w-full h-full"
                />
              </div>
            </div>
            {/* INPUT EMAIL */}
            <div>
              <label htmlFor="" className="text-[14px] font-semibold">
                Email
              </label>
              <div className="flex gap-3.5 p-3.5 mt-3.5 border rounded-md bg-[#FCFDFE]">
                <img src={mail} alt="email" className="cursor-pointer" />
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email"
                  className="outline-none w-full h-full"
                />
              </div>
            </div>
            {/* INPUT PASSWORD */}
            <div>
              <label htmlFor="" className="text-[14px] font-semibold">
                Password
              </label>
              <div className="flex gap-3.5 p-3.5 mt-3.5 border rounded-md bg-[#FCFDFE]">
                <img src={password} alt="password" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
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
              <label htmlFor="" className="text-[14px] font-semibold">
                Confirm Password
              </label>
              <div className="flex gap-3.5 p-3.5 mt-3.5 border rounded-md bg-[#FCFDFE]">
                <img src={password} alt="confirm password" />
                <input
                  type={showCheckPassword ? "text" : "password"}
                  name="confirmPassword"
                  id="confirmPassword"
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

            <button className="w-full py-2.5 rounded-md bg-(--secondary-color) hover:scale-[0.9] hover:text-white duration-500 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] cursor-pointer">
              Register
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
            <div className="flex text-center justify-between">
              <div className="border-b-1 border-black/50 translate-y-2 h-1 w-2/5" />
              <p>Or</p>
              <div className="border-b-1 border-black/50 translate-y-2 h-1 w-2/5" />
            </div>
            <div className="flex justify-evenly">
              <div className="relative bg-white/80 p-5 flex gap-2.5 justify-center rounded-[15px] shadow-[0_2px_10px_rgba(0,0,0,0.4)] overflow-hidden group hover:scale-[0.9] duration-500 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] cursor-pointer lg:w-2/5 lg:order-2 lg:p-3">
                <img
                  src={googleIcon}
                  alt="google"                  
                />
                <p
                  className="max-lg:hidden"
                >
                  Google
                </p>
              </div>
              <div className="relative bg-white/80 p-5 flex gap-2.5 justify-center rounded-[15px] shadow-[0_2px_10px_rgba(0,0,0,0.4)] overflow-hidden group hover:scale-[0.9] duration-500 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]  cursor-pointer lg:w-2/5 lg:order-1 lg:p-3">
                <img
                  src={fbIcon}
                  alt="facebook"                  
                />
                <p
                  className="max-lg:hidden"
                >
                  Facebook
                </p>
              </div>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}

export default Register;
