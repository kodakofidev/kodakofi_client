import React from 'react'
import HeaderOrdersAdmin from '../../components/Admin/ordersAdmin/HeaderOrdersAdmin'
import TableOrdersAdmin from '../../components/Admin/ordersAdmin/TableOrdersAdmin'
import ModalsDetailOrder from '../../components/Admin/ordersAdmin/ModalsDetailOrder';
import { useSelector, useDispatch } from "react-redux";
import {modalAction} from '../../redux/slices/modalsAdmin'

export default function OrdersAdmin() {
    const {detailOrder} = useSelector((state) => state.modals);
    const dispatch = useDispatch();
    const dummyOrders = [
      {
        noOrder: "#12354-00001",
        date: "2025-05-19T09:00:00.000Z",
        order: ["Espresso", "Latte"],
        status: "Pending",
        total: 18000,
        image: "/image"
      },
      {
        noOrder: "#12354-00002",
        date: "2025-05-18T14:30:00.000Z",
        order: ["Cappuccino"],
        status: "Processing",
        total: 22000,
        image: "/image"
      },
      {
        noOrder: "#12354-00003",
        date: "2025-05-17T10:15:00.000Z",
        order: ["Americano", "Hazelnut Latte"],
        status: "On Delivery",
        total: 34000,
        image: "/image"
      },
      {
        noOrder: "#12354-00004",
        date: "2025-05-16T16:45:00.000Z",
        order: ["Mocha", "Caramel Machiato"],
        status: "Completed",
        total: 40000,
        image: "/image"
      },
      {
        noOrder: "#12354-00005",
        date: "2025-05-15T11:20:00.000Z",
        order: ["Vanilla Latte"],
        status: "Pending",
        total: 18000,
        image: "/image"
      },
      {
        noOrder: "#12354-00006",
        date: "2025-05-14T13:00:00.000Z",
        order: ["Hazelnut Latte", "Espresso"],
        status: "Processing",
        total: 32000,
        image: "/image"
      },
      {
        noOrder: "#12354-00007",
        date: "2025-05-13T17:40:00.000Z",
        order: ["Caramel Machiato"],
        status: "On Delivery",
        total: 24000,
        image: "/image"
      },
      {
        noOrder: "#12354-00008",
        date: "2025-05-12T08:10:00.000Z",
        order: ["Flat White", "Mocha"],
        status: "Completed",
        total: 36000,
        image: "/image"
      },
      {
        noOrder: "#12354-00009",
        date: "2025-05-11T15:00:00.000Z",
        order: ["Americano"],
        status: "Pending",
        total: 16000,
        image: "/image"
      },
      {
        noOrder: "#12354-00010",
        date: "2025-05-10T09:45:00.000Z",
        order: ["Latte", "Vanilla Latte"],
        status: "Processing",
        total: 34000,
        image: "/image"
      },
      {
        noOrder: "#12354-00011",
        date: "2025-05-09T14:25:00.000Z",
        order: ["Espresso", "Mocha"],
        status: "Completed",
        total: 30000,
        image: "/image"
      },
      {
        noOrder: "#12354-00012",
        date: "2025-05-08T12:30:00.000Z",
        order: ["Hazelnut Latte"],
        status: "On Delivery",
        total: 20000,
        image: "/image"
      },
      {
        noOrder: "#12354-00013",
        date: "2025-05-07T16:10:00.000Z",
        order: ["Cappuccino", "Caramel Machiato"],
        status: "Pending",
        total: 38000,
        image: "/image"
      },
      {
        noOrder: "#12354-00014",
        date: "2025-05-06T10:20:00.000Z",
        order: ["Flat White"],
        status: "Processing",
        total: 20000,
        image: "/image"
      },
      {
        noOrder: "#12354-00015",
        date: "2025-05-05T09:00:00.000Z",
        order: ["Americano", "Vanilla Latte"],
        status: "Completed",
        total: 34000,
        image: "/image"
      },
      {
        noOrder: "#12354-00016",
        date: "2025-05-04T13:00:00.000Z",
        order: ["Caramel Machiato", "Espresso"],
        status: "On Delivery",
        total: 34000,
        image: "/image"
      },
      {
        noOrder: "#12354-00017",
        date: "2025-05-03T15:15:00.000Z",
        order: ["Latte"],
        status: "Pending",
        total: 18000,
        image: "/image"
      },
      {
        noOrder: "#12354-00018",
        date: "2025-05-02T10:30:00.000Z",
        order: ["Mocha", "Cappuccino"],
        status: "Processing",
        total: 36000,
        image: "/image"
      },
      {
        noOrder: "#12354-00019",
        date: "2025-05-01T11:45:00.000Z",
        order: ["Espresso"],
        status: "Completed",
        total: 14000,
        image: "/image"
      },
      {
        noOrder: "#12354-00020",
        date: "2025-04-30T08:50:00.000Z",
        order: ["Flat White", "Hazelnut Latte"],
        status: "On Delivery",
        total: 36000,
        image: "/image"
      },
      {
        noOrder: "#12354-00021",
        date: "2025-04-29T09:40:00.000Z",
        order: ["Latte", "Caramel Machiato"],
        status: "Pending",
        total: 38000,
        image: "/image"
      },
      {
        noOrder: "#12354-00022",
        date: "2025-04-28T14:10:00.000Z",
        order: ["Cappuccino"],
        status: "Processing",
        total: 20000,
        image: "/image"
      },
      {
        noOrder: "#12354-00023",
        date: "2025-04-27T13:30:00.000Z",
        order: ["Mocha"],
        status: "Completed",
        total: 22000,
        image: "/image"
      },
      {
        noOrder: "#12354-00024",
        date: "2025-04-26T17:15:00.000Z",
        order: ["Americano", "Flat White"],
        status: "On Delivery",
        total: 34000,
        image: "/image"
      },
      {
        noOrder: "#12354-00025",
        date: "2025-04-25T12:00:00.000Z",
        order: ["Vanilla Latte"],
        status: "Completed",
        total: 18000,
        image: "/image"
      },
      {
        noOrder: "#12354-00025",
        date: "2025-04-25T12:00:00.000Z",
        order: ["Vanilla Latte"],
        status: "Completed",
        total: 18000,
        image: "/image"
      }
    ];


  return (
    <>
        <section className="outline-8 outline-[#fff] overscroll-none">
            <HeaderOrdersAdmin />
            <TableOrdersAdmin data={dummyOrders}/>
            <section>
              <ModalsDetailOrder />
            </section>
            <div 
              className={`fixed top-0 bottom-0 left-0 right-[50.5%] z-10 bg-black opacity-70 transition duration-300 ${detailOrder ? "translate-x-0" : "translate-x-[200%]"}`} onClick={() => (
                dispatch(modalAction.closeAllModal())
              )}>
            </div>
        </section>
    </>
  )
}
