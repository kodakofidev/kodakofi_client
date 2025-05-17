import React from "react";
import Plus from "../../assets/iconCheckoutPage/plus.svg";
import CardCheckout from "./CardCheckout";

export default function OrderListComponent({ productList, setProductList }) {
  return (
    <>
      <div className="md:col-span-4 py-4">
        <div className="flex justify-between items-center pt-2 pb-4">
          <h1 className="flex text-2xl">Your Order</h1>
          <button
            type="button"
            className="flex justify-baseline bg-orange w-24 px-1 py-2 rounded-md cursor-pointer hover:scale-[1.03] active:scale-[1]"
          >
            <img src={Plus} alt="icon" className="scale-[0.6]" />
            <p className="text-sm font-medium">Add Menu</p>
          </button>
        </div>
        <div className="flex flex-col gap-2">
          {productList.length === 0 ? (
            <>
              <div className="flex items-center justify-center flex-col gap-2">
                <h1 className="text-3xl font-semibold">Order is empty :(</h1>
                <p>Please select a product to order</p>
              </div>
            </>
          ) : (
            <>
              {productList.map((order) => (
                <CardCheckout
                  product={order.productName}
                  quantity={order.quantity}
                  size={order.size}
                  variant={order.variant}
                  typeOrder={order.typeOrder}
                  discountPrice={order.discountPrice}
                  originalPrice={order.originalPrice}
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
