import React from "react";
import Message from "../../assets/iconHistoryOrders/Message.svg";

export default function SendMessage() {
  return (
    <>
      <section className="col-span-2 pt-7">
        <div className="p-4 bg-gray-100 flex flex-col gap-3">
          <img src={Message} alt="icon" className="self-start" />
          <h1 className="text-xl font-semibold text-brown">Send Us Message</h1>
          <p>
            if your unable to find answer or find your product quickly, please
            describe your problem and tell us. we will give you solution.
          </p>
          <button
            type="button"
            className="bg-orange w-full py-2 rounded-md text-lg font-semibold hover:scale-[1.01] active:scale-[1] cursor-pointer transition"
          >
            Send Message
          </button>
        </div>
      </section>
    </>
  );
}
