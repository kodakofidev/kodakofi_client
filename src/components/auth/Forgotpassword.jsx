import React, { useState } from "react";
import loginBG from "/loginBG.svg";
import logo from "/Logo.svg";
import mail from "/icons/mail.svg";
import forgotPwd from "/forgotpwd.svg";
import { useNavigate } from "react-router";

function ForgotPassword() {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <main className="flex gap-5 h-screen max-lg:bg-[url(/forgotpwd.svg)] bg-no-repeat bg-cover lg:flex">
        <img src={forgotPwd} className="max-lg:hidden" />
        <section className="px-5 w-full py-20 bg-white/80 lg:px-10 lg:py-70">
          <img
            src={logo}
            alt="coffee shop"
            onClick={() => {
              navigate("/");
            }}
            className="cursor-pointer"
          />
          <form action="" className="flex flex-col gap-3.5 py-5">
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

            <button className="w-full py-2.5 rounded-md bg-(--secondary-color) hover:scale-[0.9] hover:text-white duration-500 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] cursor-pointer">
              Submit
            </button>
          </form>
        </section>
      </main>
    </>
  );
}

export default ForgotPassword;
