import React from "react";
import Plus from "../../assets/iconCheckoutPage/plus.svg";
import CardCheckout from "./CardCheckout";

export default function OrderListComponent({ productList, setProductList }) {
  console.log("ini product list", productList);
  return (
    <>
      <div className="py-4 md:col-span-4">
        <div className="flex items-center justify-between pt-2 pb-4">
          <h1 className="flex text-2xl">Your Order</h1>
          <button
            type="button"
            className="bg-orange flex w-24 cursor-pointer justify-baseline rounded-md px-1 py-2 hover:scale-[1.03] active:scale-[1]"
          >
            <img src={Plus} alt="icon" className="scale-[0.6]" />
            <p className="text-sm font-medium">Add Menu</p>
          </button>
        </div>
        <div className="flex flex-col gap-2">
          {productList.length === 0 ? (
            <>
              <div className="flex flex-col items-center justify-center gap-2">
                <h1 className="text-3xl font-semibold">Order is empty :(</h1>
                <p>Please select a product to order</p>
              </div>
            </>
          ) : (
            <>
              {productList.map((order) => (
                <CardCheckout
                  product={order.name}
                  quantity={order.qty}
                  size={order.size}
                  variant={order.toping}
                  // typeOrder={order.typeOrder}
                  size_id={order.size_id}
                  discountPrice={order.price}
                  originalPrice={order.pricebefore}
                  id={order.id}
                  productList={productList}
                  setProductList={setProductList}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}
