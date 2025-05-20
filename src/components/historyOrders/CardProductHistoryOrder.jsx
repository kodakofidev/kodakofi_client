import React from "react";
import Order from "../../assets/iconHistoryOrders/Order.svg";
import Calendar from "../../assets/iconHistoryOrders/Calendar.svg";
import Repeat from "../../assets/iconHistoryOrders/Repeat.svg";
import Uprocess from "../../assets/iconHistoryOrders/Uprocess.svg";
import Coffee from "../../assets/iconHistoryOrders/Coffee.jpg";

export default function CardProductHistoryOrder({
  order,
  date,
  total,
  status,
  key,
  image,
})
{
  const formatPrice = new Intl.NumberFormat('id-ID').format(total);
  return (
    <>
      <div
        className="p-4 bg-gray-100 rounded-md grid grid-cols-2 gap-3 md:gap-y-0 min-[727px]:grid-cols-5 md:p-0"
        key={key}
      >
        <div className="hidden min-[727px]:block min-[727px]:w-28 min-[727px]:h-28 min-[727px]:overflow-hidden min-[727px]:row-span-3">
          <img src={`http://localhost:8080/public/product-image/${image}`} alt="product" className="-translate-y-8" />
        </div>
        <div className="grid gap-2 md:gap-y-0 md:row-start-1 md:col-start-2 md:row-span-2">
          <div className="flex gap-3 items-center">
            <img src={Order} alt="icon" />
            <p>No. Order</p>
          </div>
          <p className="font-bold text-[16px] self-center">{order.slice(0, 15)}</p>
        </div>
        <div className="grid gap-2 md:gap-y-0 md:row-start-1 md:col-start-3 md:row-span-2">
          <div className="flex gap-3 items-center">
            <img src={Calendar} alt="icon" />
            <p>Date</p>
          </div>
          <p className="font-bold text-[16px] self-center">{date}</p>
        </div>
        <div className="grid gap-2 md:gap-y-0 md:row-start-1 md:col-start-4 md:row-span-2">
          <div className="flex gap-3 items-center">
            <img src={Uprocess} alt="icon" />
            <p>Total</p>
          </div>
          <p className="font-bold text-[16px] self-center">Idr {formatPrice}</p>
        </div>
        <div className="grid gap-2 md:gap-y-0 md:row-start-1 md:col-start-5 md:row-span-2">
          <div className="flex gap-3 items-center">
            <img src={Repeat} alt="icon" />
            <p>Status</p>
          </div>
          <p
            className={`${
              status === "Pending"
                ? "bg-orange-100 text-orange"
                : status === "Completed"
                ? "bg-teal-100 text-teal-700"
                : "bg-blue-100 text-blue-700"
            } font-bold w-28 rounded-lg text-[13px] px-2 py-1 text-center self-center`}
          >
            {status}
          </p>
        </div>
        <div className="col-span-2 md:row-start-3 md:col-start-2">
          <a href="#" className="text-orange underline cursor-pointer">
            Views Order Detail
          </a>
        </div>
      </div>
    </>
  );
}
