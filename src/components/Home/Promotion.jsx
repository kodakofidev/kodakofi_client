import React from "react";
import Hero2 from "/landingPage/Hero2.jpg";
import Check from "/landingPage/Check.svg";

export default function Promotion() {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="w-full h-[600px] overflow-hidden md:col-start-2">
          <img src={Hero2} alt="hero" className="scale-[1.3]" />
        </div>
        <div className="p-7 flex flex-col justify-center md:row-start-1 md:px-20">
          <h1 className="text-3xl pl-5 pb-5 relative before:absolute before:left-0 before:content-[''] before:w-2 before:h-17 before:bg-amber-600 before:rounded-lg">
            We Provide <span className="text-brown">Good Coffee</span> and{" "}
            <span className="text-brown">Healthy Meals</span>
          </h1>
          <p className="pb-4 pt-4">
            You can explore the menu that we provide with fun and have their own
            taste and make your day better.
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <img src={Check} alt="icon" />
              <p>High quality beans</p>
            </div>
            <div className="flex gap-2">
              <img src={Check} alt="icon" />
              <p>Healthy meals, you can request the ingredients</p>
            </div>
            <div className="flex gap-2">
              <img src={Check} alt="icon" />
              <p>Free member card with a minimum purchase of IDR 200.000.</p>
            </div>
            <div className="flex gap-2">
              <img src={Check} alt="icon" />
              <p>Chat with our staff to get better experience for ordering</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
