import React from "react";

function OtpComponent() {
  return (
    <main className="flex flex-col justify-center items-center text-center gap-10">
      <h1 className="font-bold text-5xl text-(--primary-color) pt-30 min-lg:pt-40 min-lg:text-6xl">
        Enter OTP
      </h1>
      <p className="text-2xl min-lg:text-4xl">We've sent a code to your email address</p>
      <section className="flex gap-2 min-lg:gap-10">
        <div className="w-20 h-20 border-2 rounded-3xl text-5xl font-bold min-lg:text-9xl min-lg:w-40 min-lg:h-40">
          <input
            type="text"
            name="firstCode"
            id="firstCode"
            placeholder="0"
            className="outline-none w-full h-full px-6 min-lg:px-10"
          />
        </div>

        <div className="w-20 h-20 border-2 rounded-3xl text-5xl font-bold min-lg:text-9xl min-lg:w-40 min-lg:h-40">
          <input
            type="text"
            name="secondCode"
            id="secondCode"
            placeholder="0"
            className="outline-none w-full h-full px-6 min-lg:px-10"
          />
        </div>

        <div className="w-20 h-20 border-2 rounded-3xl text-5xl font-bold min-lg:text-9xl min-lg:w-40 min-lg:h-40">
          <input
            type="text"
            name="thirdCode"
            id="thirdCode"
            placeholder="0"
            className="outline-none w-full h-full px-6 min-lg:px-10"
          />
        </div>
        <div className="w-20 h-20 border-2 rounded-3xl text-5xl font-bold min-lg:text-9xl min-lg:w-40 min-lg:h-40">
          <input
            type="text"
            name="fourthCode"
            id="fourthCode"
            placeholder="0"
            className="outline-none w-full h-full px-6 min-lg:px-10"
          />
        </div>
      </section>
      <button className="w-3/5 h-15 rounded-md bg-(--secondary-color) hover:scale-[0.9] hover:text-white duration-500 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] cursor-pointer min-lg:w-1/3 min-lg:h-20">
        VERIIFY
      </button>
      <p className="text-2xl text-(--secondary-color) min-lg:text-4xl">
        Didn't receive the code?{" "}
        <span className="font-semibold underline cursor-pointer hover:font-bold">
          Resend
        </span>
      </p>
    </main>
  );
}

export default OtpComponent;
