import React from "react";
import RadioStatusOrder from "./RadioStatusOrder";

export default function HistoryOrdersSection() {
  return (
    <>
      <section className="pt-6">
        <div className="grid grid-cols-5">
          <div className="grid grid-cols-3 gap-2 col-span-5 md:col-span-3 px-2 py-2 bg-gray-200">
            <RadioStatusOrder
              id="onProgress"
              name="status"
              value="On Progress"
            />
            <RadioStatusOrder
              id="sendingGoods"
              name="status"
              value="Sending Goods"
            />
            <RadioStatusOrder
              id="finishOrder"
              name="status"
              value="Finish Order"
            />
          </div>
          <div className="grid col-span-2 md:col-span-2">
            <div>
              <input type="date" name="historyDate" id="historyDate" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
