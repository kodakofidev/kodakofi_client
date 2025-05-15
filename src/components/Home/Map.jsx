import React from "react";
import HugeGlobal from "/landingPage/HugeGlobal.svg";

export default function Map() {
  return (
    <>
      <section className="flex flex-col pb-10 px-4 lg:px-8 md:px-12 xl:px-24 select-none">
        <h1 className="text-3xl pb-5 text-center relative before:absolute before:bottom-0 before:content-[''] before:w-16 before:h-2 before:bg-amber-600 before:rounded-lg before:left-1/2 before:-translate-x-1/2">
          <span className="text-brown">Visit Our People</span> in The Spot on
          The Map Below
        </h1>
        <p className="py-4 text-center">
          You can explore the menu that we provide with fun and have their own
          taste and make your day better.
        </p>
        <img src={HugeGlobal} alt="map" />
      </section>
    </>
  );
}
