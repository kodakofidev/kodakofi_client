import React from "react";
import HistoryOrdersSection from "../../components/historyOrders/HistoryOrdersSection";
import SendMessage from "../../components/historyOrders/SendMessage";

export default function HistoryOrderPage() {
  return (
    <>
      <section className="px-4 lg:px-8 md:px-12 xl:px-24 pt-[90px]">
        <div className="grid grid-cols-1">
          <div className="flex gap-5 justify-between items-center md:justify-normal">
            <h1 className="text-3xl">History Order</h1>
            <div className="w-6 h-6 bg-gray-200 leading-6 text-center">2</div>
          </div>
          <div className="grid grid-cols-1 gap-y-4 min-[1025px]:gap-4 lg:grid-cols-7">
            <HistoryOrdersSection />
            <SendMessage />
          </div>
        </div>
      </section>
    </>
  );
}
