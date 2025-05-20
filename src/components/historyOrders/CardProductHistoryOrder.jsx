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
        className="grid grid-cols-2 gap-3 rounded-md bg-gray-100 p-4 min-[727px]:grid-cols-5 md:gap-y-0 md:p-0"
        key={key}
      >
<<<<<<< HEAD
        <div className="hidden min-[727px]:row-span-3 min-[727px]:block min-[727px]:h-28 min-[727px]:w-28 min-[727px]:overflow-hidden">
          <img src={Coffee} alt="product" className="-translate-y-8" />
=======
        <div className="hidden min-[727px]:block min-[727px]:w-28 min-[727px]:h-28 min-[727px]:overflow-hidden min-[727px]:row-span-3">
          <img src={`http://localhost:8080/public/product-image/${image}`} alt="product" className="-translate-y-8" />
>>>>>>> b2223e33e03dec27dcce0b228b05c0e51c00e73d
        </div>
        <div className="grid gap-2 md:col-start-2 md:row-span-2 md:row-start-1 md:gap-y-0">
          <div className="flex items-center gap-3">
            <img src={Order} alt="icon" />
            <p>No. Order</p>
          </div>
<<<<<<< HEAD
          <p className="self-center text-[16px] font-bold">{order}</p>
=======
          <p className="font-bold text-[16px] self-center">{order.slice(0, 15)}</p>
>>>>>>> b2223e33e03dec27dcce0b228b05c0e51c00e73d
        </div>
        <div className="grid gap-2 md:col-start-3 md:row-span-2 md:row-start-1 md:gap-y-0">
          <div className="flex items-center gap-3">
            <img src={Calendar} alt="icon" />
            <p>Date</p>
          </div>
          <p className="self-center text-[16px] font-bold">{date}</p>
        </div>
        <div className="grid gap-2 md:col-start-4 md:row-span-2 md:row-start-1 md:gap-y-0">
          <div className="flex items-center gap-3">
            <img src={Uprocess} alt="icon" />
            <p>Total</p>
          </div>
<<<<<<< HEAD
          <p className="self-center text-[16px] font-bold">Idr {total}</p>
=======
          <p className="font-bold text-[16px] self-center">Idr {formatPrice}</p>
>>>>>>> b2223e33e03dec27dcce0b228b05c0e51c00e73d
        </div>
        <div className="grid gap-2 md:col-start-5 md:row-span-2 md:row-start-1 md:gap-y-0">
          <div className="flex items-center gap-3">
            <img src={Repeat} alt="icon" />
            <p>Status</p>
          </div>
<<<<<<< HEAD
          <p className="text-orange w-28 self-center rounded-lg bg-orange-100 px-2 py-1 text-center text-[13px] font-bold">
=======
          <p
            className={`${
              status === "Pending"
                ? "bg-orange-100 text-orange"
                : status === "Completed"
                ? "bg-teal-100 text-teal-700"
                : "bg-blue-100 text-blue-700"
            } font-bold w-28 rounded-lg text-[13px] px-2 py-1 text-center self-center`}
          >
>>>>>>> b2223e33e03dec27dcce0b228b05c0e51c00e73d
            {status}
          </p>
        </div>
        <div className="col-span-2 md:col-start-2 md:row-start-3">
          <a href="#" className="text-orange cursor-pointer underline">
            Views Order Detail
          </a>
        </div>
      </div>
    </>
  );
}
