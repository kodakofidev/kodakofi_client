import React from "react";
import Card from "../Card";
import CardProductHome from "./CardProductHome";

export default function MenuFavorite() {
  return (
    <>
      <section className="flex flex-col pb-10 px-4 md:pt-14 lg:px-8 md:px-12 xl:px-24 select-none">
        <h1 className="text-3xl pb-5 text-center relative before:absolute before:bottom-0 before:content-[''] before:w-16 before:h-2 before:bg-amber-600 before:rounded-lg before:left-1/2 before:-translate-x-1/2">
          Here Is People <span className="text-brown">Favorite</span>
        </h1>
        <p className="pt-4 text-center">
          You can explore the menu that we provide with fun and have their own
          taste and make your day better.
        </p>
        <div className="grid grid-cols-2 gap-4  min-[1020px]:grid-cols-4">
          <div className="h-[470px] max-w-[300px] justify-self-center min-[1020px]:h-[540px]">
            <CardProductHome />
          </div>
          <div className="h-[470px] max-w-[300px] justify-self-center min-[1020px]:h-[540px]">
            <CardProductHome />
          </div>
          <div className="h-[470px] max-w-[300px] justify-self-center min-[1020px]:h-[540px]">
            <CardProductHome />
          </div>
          <div className="h-[470px] max-w-[300px] justify-self-center min-[1020px]:h-[540px]">
            <CardProductHome />
          </div>
        </div>
        {/* <div className="flex gap-4 mt-4 max-sm:overflow-x-scroll max-sm:overflow-y-hidden min-h-[540px]"> */}
        {/* <div className="grid grid-cols-2 mt-4 max-sm:overflow-x-scroll max-sm:overflow-y-hidden md:grid-cols-4"> */}
        {/* <div className="flex gap-4 mt-4 min-h-[540px] max-[740px]:grid max-[740px]:grid-cols-2"> */}
        {/* <div className="grid grid-cols-4 place-content-start gap-4 mt-4 min-h-[540px] max-[740px]:grid max-[740px]:grid-cols-2">
          <div className="flex">
            <Card />
          </div>
          <div className="flex">
            <Card />
          </div>
          <div className="flex">
            <Card />
          </div>
          <div className="flex">
            <Card />
          </div>
        </div> */}
      </section>
    </>
  );
}
