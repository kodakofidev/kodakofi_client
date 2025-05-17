import React, { useEffect, useState } from "react";
import RadioStatusOrder from "./RadioStatusOrder";
import CardProductHistoryOrder from "./CardProductHistoryOrder";
import PaginationHistoryOrder from "./PaginationHistoryOrder";
import Arrow from "../../assets/iconHistoryOrders/ArrowRight.svg";

export default function HistoryOrdersSection() {
  const [page, setPage] = useState(1);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(4);
  const [more, setMore] = useState(0);
  const [checked, setChecked] = useState(1);
  const [filterByDate, setFilterByDate] = useState(null);

  const orders = [
    {
      noOrder: "#12351-09893",
      date: "2025-01-24",
      total: 40.0,
      onProgress: "On Progress",
    },
    {
      noOrder: "#12352-09893",
      date: "2025-01-26",
      total: 50.0,
      onProgress: "On Progress",
    },
    {
      noOrder: "#12353-09893",
      date: "2025-01-27",
      total: 40.0,
      onProgress: "On Progress",
    },
    {
      noOrder: "#12354-09893",
      date: "2025-02-03",
      total: 70.0,
      onProgress: "On Progress",
    },
    {
      noOrder: "#12355-09893",
      date: "2025-02-05",
      total: 37.0,
      onProgress: "On Progress",
    },
    {
      noOrder: "#12356-09893",
      date: "2025-02-06",
      total: 35.0,
      onProgress: "On Progress",
    },
    {
      noOrder: "#12367-09893",
      date: "2025-02-07",
      total: 31.0,
      onProgress: "On Progress",
    },
    {
      noOrder: "#12368-09893",
      date: "2025-02-23",
      total: 35.0,
      onProgress: "On Progress",
    },
    {
      noOrder: "#123609-09893",
      date: "2025-02-23",
      total: 35.0,
      onProgress: "On Progress",
    },
    {
      noOrder: "#123610-09893",
      date: "2025-02-23",
      total: 35.0,
      onProgress: "On Progress",
    },
    {
      noOrder: "#123611-09893",
      date: "2025-02-23",
      total: 35.0,
      onProgress: "On Progress",
    },
    {
      noOrder: "#123612-09893",
      date: "2025-02-30",
      total: 35.0,
      onProgress: "On Progress",
    },
    {
      noOrder: "#123613-09893",
      date: "2025-03-01",
      total: 35.0,
      onProgress: "On Progress",
    },
    {
      noOrder: "#123614-09893",
      date: "2025-03-01",
      total: 35.0,
      onProgress: "On Progress",
    },
    {
      noOrder: "#123615-09893",
      date: "2025-03-01",
      total: 35.0,
      onProgress: "On Progress",
    },
    {
      noOrder: "#123616-09893",
      date: "2025-03-01",
      total: 35.0,
      onProgress: "On Progress",
    },
    {
      noOrder: "#123617-09893",
      date: "2025-03-01",
      total: 35.0,
      onProgress: "On Progress",
    },
    {
      noOrder: "#123618-09893",
      date: "2025-03-01",
      total: 35.0,
      onProgress: "On Progress",
    },
    {
      noOrder: "#123619-09893",
      date: "2025-03-01",
      total: 35.0,
      onProgress: "On Progress",
    },
    {
      noOrder: "#123620-09893",
      date: "2025-03-01",
      total: 35.0,
      onProgress: "On Progress",
    },
    {
      noOrder: "#123621-09893",
      date: "2025-03-01",
      total: 35.0,
      onProgress: "On Progress",
    },
    {
      noOrder: "#123622-09893",
      date: "2025-03-01",
      total: 35.0,
      onProgress: "On Progress",
    },
    {
      noOrder: "#123623-09893",
      date: "2025-03-01",
      total: 35.0,
      onProgress: "On Progress",
    },
    {
      noOrder: "#123624-09893",
      date: "2025-03-01",
      total: 35.0,
      onProgress: "On Progress",
    },
    {
      noOrder: "#123625-09893",
      date: "2025-03-01",
      total: 35.0,
      onProgress: "On Progress",
    },
  ];

  let totalPagination = 0;
  if (filterByDate === null) {
    const pagination = Math.ceil(orders.length / 4);
    totalPagination += pagination;
  } else {
    const pagination = Math.ceil(filterByDate.length / 4);
    totalPagination += pagination;
  }

  useEffect(() => {
    setStart(page * 4 - 4), setEnd(page * 4);
  }, [page]);

  const ordersHistory = [];
  if (filterByDate === null) {
    const sliceOrder = orders.slice(start, end);
    ordersHistory.push(...sliceOrder);
  } else {
    const sliceOrder = filterByDate.slice(start, end);
    ordersHistory.push(...sliceOrder);
  }

  function filterDate(e) {
    const data = orders.filter((order) => order.date === e.target.value);
    setFilterByDate(data);
    setPage(1);
    setChecked(1);
  }

  function clearFilterDate() {
    setFilterByDate(null);
  }

  // function setInitPage() {
  //   setChecked(1);
  // }

  return (
    <>
      <section className="pt-6 lg:col-span-5 pb-8">
        <div className="grid grid-cols-5 gap-4">
          <div className="grid grid-cols-3 gap-2 col-span-5 md:col-span-3 p-2 bg-gray-100">
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
          <h1
            onClick={clearFilterDate}
            className={`${
              !filterByDate ? "hidden" : "block"
            } row-start-1 col-start-4 place-self-end md:-translate-x-5 col-span-2 md:row-start-2 md:col-start-5 cursor-pointer text-red-600 font-semibold text-nowrap`}
          >
            Clear filter date
          </h1>
          <div className="grid col-span-2 row-start-1 md:col-start-4 md:col-span-2 md:place-content-end">
            <div>
              <input
                onChange={filterDate}
                type="date"
                name="historyDate"
                id="historyDate"
                className="py-2 px-3 bg-gray-100"
              />
            </div>
          </div>
          <div className="col-span-5 grid gap-4">
            {filterByDate === null ? (
              <>
                {ordersHistory.map((order, index) => {
                  {
                    const newDate = new Date(order.date);
                    const dateFormat = Intl.DateTimeFormat("id-ID", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    }).format(newDate);
                    return (
                      <CardProductHistoryOrder
                        key={index}
                        order={order.noOrder}
                        date={dateFormat}
                        total={1000}
                        status={order.onProgress}
                      />
                    );
                  }
                })}
              </>
            ) : (
              <>
                {ordersHistory.map((order, index) => {
                  {
                    const newDate = new Date(order.date);
                    const dateFormat = Intl.DateTimeFormat("id-ID", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    }).format(newDate);
                    return (
                      <CardProductHistoryOrder
                        key={index}
                        order={order.noOrder}
                        date={dateFormat}
                        total={1000}
                        status={order.onProgress}
                      />
                    );
                  }
                })}
              </>
            )}
          </div>
          <div className="col-span-5">
            <div className="w-full flex justify-center gap-4 pt-3">
              {/* batas */}
              {(() => {
                if (totalPagination > 3) {
                  return (
                    <div>
                      <div
                        onClick={() => {
                          if (more + totalPagination > totalPagination) {
                            setMore(more - 1);
                          }
                        }}
                        className="h-10 w-10 bg-orange rounded-full cursor-pointer shadow-lg hover:scale-[1.03] active:scale-[1] transition flex justify-center items-center"
                      >
                        <img src={Arrow} alt="icon" className="rotate-180" />
                      </div>
                    </div>
                  );
                }
              })()}
              {/* batas */}
              {(() => {
                const pagination = [];
                for (let idx = 0; idx < totalPagination; idx++) {
                  if (idx < 3) {
                    pagination.push(
                      <PaginationHistoryOrder
                        id={`page${idx + 1 + more}`}
                        name={"pagination"}
                        value={idx + 1 + more}
                        setPage={setPage}
                        checked={checked}
                        setChecked={setChecked}
                      />
                    );
                  }
                }
                return pagination;
              })()}
              {(() => {
                if (totalPagination > 3) {
                  return (
                    <div>
                      <div
                        onClick={() => {
                          if (
                            more + totalPagination <
                            totalPagination + (totalPagination - 3)
                          ) {
                            setMore(more + 1);
                          }
                        }}
                        className="h-10 w-10 bg-orange rounded-full cursor-pointer shadow-lg hover:scale-[1.03] active:scale-[1] transition flex justify-center items-center"
                      >
                        <img src={Arrow} alt="icon" />
                      </div>
                    </div>
                  );
                }
              })()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
