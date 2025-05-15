import React from "react";
import HeroSection from "../components/Home/HeroSection";
import Promotion from "../components/Home/Promotion";
import MenuFavorite from "../components/Home/MenuFavorite";
import Map from "../components/Home/Map";
import Testimonial from "../components/Home/Testimonial";

export default function Home() {
  return (
    <>
      <div>
        <HeroSection />
        <Promotion />
        <MenuFavorite />
        <Map />
        <Testimonial />
      </div>
    </>
  );
}
