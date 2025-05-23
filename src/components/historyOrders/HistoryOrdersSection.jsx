import React, { useEffect, useState } from "react";
import RadioStatusOrder from "./RadioStatusOrder";
import CardProductHistoryOrder from "./CardProductHistoryOrder";
import PaginationHistoryOrder from "./PaginationHistoryOrder";
import Arrow from "../../assets/iconHistoryOrders/ArrowRight.svg";
import constant from "../../configs/constant" 
import { useSelector } from "react-redux";

export default function HistoryOrdersSection() {
  const [page, setPage] = useState(1);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(4);
  const [more, setMore] = useState(0);
  const [checked, setChecked] = useState(1);
  const [checkedStatus, setCheckedStatus] = useState("Pending");
  const [filterByDate, setFilterByDate] = useState(null);

  const [orders, setOrders] = useState([]);
  const auth = useSelector((state) => state.auth.user.token);
  
  async function gethistory() {
    const option = {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${auth}`,
          'Content-Type': 'application/json'
      }
    };
    try {
      const response = await fetch(`${constant.apiUrl}/order`, option);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setOrders(result.data); 
      console.log(result.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    gethistory();
  }, [])

  orders.sort((a, b) => new Date(b.date) - new Date(a.date));

  const dataOrders = orders.filter(
    (order) => order.status === checkedStatus,
  );

  let totalPagination = 0;
  if (filterByDate === null) {
    const pagination = Math.ceil(dataOrders.length / 4);
    totalPagination += pagination;
  } else {
    const pagination = Math.ceil(filterByDate.length / 4);
    totalPagination += pagination;
  }

  useEffect(() => {
    setStart(page * 4 - 4), setEnd(page * 4);
  }, [page]);

  useEffect(() => {
    setPage(1);
    setChecked(1);
  }, [checkedStatus, filterByDate]);

  const ordersHistory = [];
  if (filterByDate === null) {
    const sliceOrder = dataOrders.slice(start, end);
    ordersHistory.push(...sliceOrder);
  } else {
    const sliceOrder = filterByDate.slice(start, end);
    ordersHistory.push(...sliceOrder);
  }

  function filterDate(e) {
    const data = dataOrders.filter((order) => new Date(order.date) === e.target.value);
    setFilterByDate(data);
    // setPage(1);
    // setChecked(1);
  }

  function clearFilterDate() {
    setFilterByDate(null);
  }

  return (
    <>
      <section className="pt-6 pb-8 lg:col-span-5">
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-5 grid grid-cols-3 gap-2 bg-gray-100 p-2 md:col-span-3">
            <RadioStatusOrder
              id="onProgress"
              name="status"
              value="Pending"
              checkedStatus={checkedStatus}
              setCheckedStatus={setCheckedStatus}
            />
            <RadioStatusOrder
              id="sendingGoods"
              name="status"
              value="On Delivery"
              checkedStatus={checkedStatus}
              setCheckedStatus={setCheckedStatus}
            />
            <RadioStatusOrder
              id="finishOrder"
              name="status"
              value="Completed"
              checkedStatus={checkedStatus}
              setCheckedStatus={setCheckedStatus}
            />
          </div>
          <h1
            onClick={clearFilterDate}
            className={`${
              !filterByDate ? "hidden" : "block"
            } col-span-2 col-start-4 row-start-1 cursor-pointer place-self-end font-semibold text-nowrap text-red-600 md:col-start-5 md:row-start-2 md:-translate-x-5`}
          >
            Clear filter date
          </h1>
          <div className="col-span-2 row-start-1 grid md:col-span-2 md:col-start-4 md:place-content-end">
            <div>
              <input
                onChange={filterDate}
                type="date"
                name="historyDate"
                id="historyDate"
                className="bg-gray-100 px-3 py-4"
              />
            </div>
          </div>
          <div className="col-span-5 grid gap-4">
            {ordersHistory.length === 0 ? (
              <>
                <div className="flex flex-col items-center justify-center gap-2">
                  <h1 className="text-3xl font-semibold">
                    History orders is empty :(
                  </h1>
                </div>
              </>
            ) : (
              <>
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
                            order={order.transaction_code}
                            date={dateFormat}
                            total={order.grand_total}
                            status={order.status}
                            image={order.path}
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
                            order={order.transaction_code}
                            date={dateFormat}
                            total={order.grand_total}
                            status={order.status}
                            image={order.path}
                          />
                        );
                      }
                    })}
                  </>
                )}
              </>
            )}
          </div>
          <div className="col-span-5 scale-[0.65] select-none min-[400px]:scale-[0.85] min-[520px]:scale-[1]">
            <div className="flex w-full justify-center gap-4 pt-3">
              {/* batas */}
              {(() => {
                if (totalPagination > 3) {
                  return (
                    <>
                      <div>
                        <div
                          onClick={() => {
                            console.log("more", more);
                            if (more + totalPagination > totalPagination) {
                              if (more === totalPagination - 5) {
                                setMore(more - 1);
                                setPage(page - 1);
                                setChecked(checked - 1);
                              } else {
                                setMore(more - 2);
                                setPage(page - 2);
                                setChecked(checked - 2);
                              }
                            }
                          }}
                          className={`${
                            more === 0
                              ? "cursor-not-allowed bg-gray-300"
                              : "bg-orange cursor-pointer"
                          } flex h-10 w-10 items-center justify-center rounded-full shadow-lg transition hover:scale-[1.03] active:scale-[1]`}
                        >
                          <img src={Arrow} alt="icon" className="rotate-180" />
                        </div>
                      </div>
                      {more === 0 ? (
                        <></>
                      ) : (
                        <>
                          <PaginationHistoryOrder
                            id={`page1`}
                            name={"pagination"}
                            value={1}
                            setPage={setPage}
                            checked={checked}
                            setChecked={setChecked}
                            setMore={setMore}
                            moreValue={1}
                          />
                          <div className="flex items-end">
                            <div className="text-2xl font-bold">...</div>
                          </div>
                        </>
                      )}
                    </>
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
                        key={idx}
                        setMore={setMore}
                        moreValue={idx + 1}
                      />,
                    );
                  }
                }
                return pagination;
              })()}
              {(() => {
                if (totalPagination > 3) {
                  return (
                    <>
                      {more === totalPagination - 3 ? (
                        <></>
                      ) : (
                        <>
                          <div className="flex items-end">
                            <div className="text-2xl font-bold">...</div>
                          </div>
                          <PaginationHistoryOrder
                            id={totalPagination}
                            name={"pagination"}
                            value={totalPagination}
                            setPage={setPage}
                            checked={checked}
                            setChecked={setChecked}
                            setMore={setMore}
                            moreValue={3}
                          />
                        </>
                      )}
                      <div>
                        <div
                          onClick={() => {
                            console.log(
                              "totalPagination",
                              totalPagination,
                              more,
                            );
                            if (
                              more + totalPagination <
                              totalPagination + (totalPagination - 3)
                            ) {
                              if (more === 0) {
                                setMore(more + 2);
                                setPage(page + 2);
                                setChecked(checked + 2);
                              } else if (more === totalPagination - 5) {
                                setMore(more + 2);
                                setPage(page + 2);
                                setChecked(checked + 2);
                              } else {
                                setMore(more + 1);
                                setPage(page + 1);
                                setChecked(checked + 1);
                              }
                            }
                          }}
                          className={`${
                            more === totalPagination - 3
                              ? "cursor-not-allowed bg-gray-300"
                              : "bg-orange cursor-pointer"
                          } flex h-10 w-10 items-center justify-center rounded-full shadow-lg transition hover:scale-[1.03] active:scale-[1]`}
                        >
                          <img src={Arrow} alt="icon" />
                        </div>
                      </div>
                    </>
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
