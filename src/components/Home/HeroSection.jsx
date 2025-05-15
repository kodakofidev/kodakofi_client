import React from "react";
import Hero1 from "/landingPage/Hero1.jpg";
import ChatIcon from "/landingPage/ChatCircleDots.svg";

export default function HeroSection() {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 relative">
        <div className="hidden h-[600px] overflow-hidden md:col-start-2 md:block">
          <img src={Hero1} alt="hero" className="scale-[1.3]" />
        </div>
        <div className="px-4 lg:px-8 md:px-12 xl:px-24 pt-[100px] pb-[64px] w-full bg-linear-to-t from-black to-darkbrown flex flex-col justify-center md:row-start-1 select-none">
          <h1 className="text-white text-4xl pb-5">
            Start Your Day with Coffee and Good Meals
          </h1>
          <p className="text-white pb-8">
            We provide high quality beans, good taste, and healthy meals made by
            love just for you. Start your day with us for a bigger smile!
          </p>
          <div className="flex justify-between items-center pb-7">
            <button
              type="button"
              className="text-black px-4 py-2 rounded-lg font-semibold bg-orange hover:scale-[1.03] active:scale-[1] cursor-pointer"
            >
              Get Started
            </button>
            <div className="h-10 w-10 bg-orange rounded-full flex items-center justify-center cursor-pointer md:absolute md:bottom-16 md:right-16 md:scale-[1.4] md:hover:scale-[1.45] md:active:scale-[1.4] hover:scale-[1.03] active:scale-[1]">
              <img src={ChatIcon} alt="icon" />
            </div>
          </div>
          <div className="grid grid-cols-3 text-white relative">
            <div className="flex flex-col gap-3 items-start relative before:absolute before:right-0 before:w-[2px] before:h-20 before:bg-white">
              <div className="flex flex-col gap-2">
                <h1 className="text-orange text-3xl lg:text-4xl">90+</h1>
                <p>Staff</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <div className="flex flex-col gap-2">
                <h1 className="text-orange text-3xl lg:text-4xl">30+</h1>
                <p>Stores</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 items-end relative after:absolute after:left-0 after:w-[2px] after:h-20 after:bg-white">
              <div className="flex flex-col gap-2">
                <h1 className="text-orange text-3xl lg:text-4xl">800+</h1>
                <p>Customer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
