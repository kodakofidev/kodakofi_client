import React from "react";
import HistoryOrdersSection from "../../components/historyOrders/HistoryOrdersSection";

export default function HistoryOrderPage() {
  return (
    <>
      <section className="px-4 lg:px-8 md:px-12 xl:px-24 pt-[90px]">
        <div className="grid grid-cols-1">
          <div className="flex gap-3 items-end">
            <h1 className="text-3xl">History Order</h1>
            <div className="w-6 h-6 bg-gray-200 leading-6 text-center">2</div>
          </div>
          <div className="grid grid-cols-1">
            <HistoryOrdersSection />
          </div>
        </div>
      </section>
    </>
  );
}
