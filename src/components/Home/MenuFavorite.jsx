import React from "react";
import Card from "../Card";

export default function MenuFavorite() {
  return (
    <>
      <section className="flex flex-col p-7 select-none">
        <h1 className="text-3xl pb-5 text-center relative before:absolute before:bottom-0 before:content-[''] before:w-16 before:h-2 before:bg-amber-600 before:rounded-lg before:left-1/2 before:-translate-x-1/2">
          Here Is People <span className="text-brown">Favorite</span>
        </h1>
        <p className="py-4 text-center">
          You can explore the menu that we provide with fun and have their own
          taste and make your day better.
        </p>
        <div>LIST MENU</div>
        <div className="flex gap-2 h-max flex-wrap"></div>
      </section>
    </>
  );
}
