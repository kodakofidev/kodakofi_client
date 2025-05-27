import React, { useEffect, useState } from "react";
import Card from "../Card";
import CardProductHome from "./CardProductHome";
import constant from "../../configs/constant";

export default function MenuFavorite() {
  const [products, setProduct] = useState([]);

  async function getProducts() {
    try {
      const response = await fetch(`${constant.apiUrl}/product`);
      const dataJSON = await response.json();
      setProduct(dataJSON.data.data);
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    getProducts()
  }, [])

  console.log(products, "cek")

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
          {products.slice(0, 4).map((product, idx) => (
              <div className="h-[470px] max-w-[300px] justify-self-center min-[1020px]:h-[540px]">
                <CardProductHome product={product}/>
              </div>
          ))};
        </div>
      </section>
    </>
  );
}
