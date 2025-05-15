import React, { useState } from "react";
import loginBG from "/loginBG.svg";
import logo from "/Logo.svg";
import mail from "/icons/mail.svg";
import password from "/icons/Password.svg";
import eyeslash from "/icons/EyeSlash.svg";
import eye from "/icons/eye.svg";
import fbIcon from "/icons/fb_icon.svg";
import googleIcon from "/icons/google_icon.svg";
import { Link } from "react-router";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <main className="flex gap-5 max-lg:bg-[url(/loginBG.svg)] bg-no-repeat bg-cover lg:flex ">
        <img src={loginBG} className="max-lg:hidden" />
        <section className="px-5 w-full py-20 bg-white/80 lg:px-10 lg:py-40">
          <img src={logo} alt="coffee shop" />
          <form action="" className="flex flex-col gap-3.5 py-5">
            <h1 className="text-[18px] text-(--primary-color)">Login</h1>
            <p className="text-[14px]">Fill out the form correctly</p>
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
                <img src={showPassword ? eyeslash : eye} alt={showPassword ? "show password" : "hide password"} 
                onClick={togglePasswordVisibility} className="cursor-pointer"/>
              </div>
            </div>
            <Link to="/auth/forgotpassword" className="font-semibold text-(--secondary-color) w-fit self-end hover:font-bold cursor-pointer">
              Lupa Password?
            </Link>
            <button className="w-full py-2.5 rounded-md bg-(--secondary-color) hover:scale-[0.9] hover:text-white duration-500 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] cursor-pointer">
              Login
            </button>
            <p className="text-center">
              Not Have An Account?{" "}
              <Link to="/auth/register" className="text-(--secondary-color) hover:font-semibold cursor-pointer">
                Register
              </Link>
            </p>
            <div className="flex text-center justify-between">
              <div className="border-b-1 border-black/50 translate-y-2 h-1 w-2/5" />
              <p>Or</p>
              <div className="border-b-1 border-black/50 translate-y-2 h-1 w-2/5" />
            </div>
            <div className="flex justify-evenly">
              <div className="relative bg-white/80 p-5 flex gap-2.5 justify-center rounded-[15px] shadow-[0_2px_10px_rgba(0,0,0,0.4)] overflow-hidden group hover:scale-[0.9] duration-500 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] cursor-pointer lg:w-2/5 lg:order-2 lg:p-3">
                <img src={googleIcon} alt="google" />
                <p className="max-lg:hidden">Facebook</p>
              </div>
              <div className="relative bg-white/80 p-5 flex gap-2.5 justify-center rounded-[15px] shadow-[0_2px_10px_rgba(0,0,0,0.4)] overflow-hidden group hover:scale-[0.9] duration-500 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] cursor-pointer lg:w-2/5 lg:order-2 lg:p-3">
                <img src={fbIcon} alt="facebook" />
                <p className="max-lg:hidden">Facebook</p>
              </div>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}

export default Login;
