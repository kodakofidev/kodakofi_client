import React, { useEffect, useState } from "react";
import OrderListComponent from "../../components/Checkout/OrderListComponent";
import PaymentAndInfoDelivery from "../../components/Checkout/PaymentAndInfoDelivery";
import TotalPayment from "../../components/Checkout/TotalPayment";

export default function CheckoutPage() {
  const [productList, setProductList] = useState([]);
  const [deliveryCost, setDeliveryCost] = useState(0);
  const [dataOrder, setDataOrder] = useState({});

  const chart = [
    {
      id: 1,
      productName: "Hazelnut Latte",
      quantity: 3,
      size: "Regular",
      variant: "Ice",
      typeOrder: "Dine In",
      discountPrice: 20000,
      originalPrice: 40000,
    },
    {
      id: 2,
      productName: "Coffee Latte",
      quantity: 2,
      size: "Medium",
      variant: "Hot",
      typeOrder: "Dine In",
      discountPrice: 30000,
      originalPrice: 40000,
    },
    {
      id: 3,
      productName: "Hot Coffee",
      quantity: 3,
      size: "Regular",
      variant: "Hot",
      typeOrder: "Dine In",
      discountPrice: 20000,
      originalPrice: 30000,
    },
  ];

  useEffect(() => {
    setProductList(chart);
  }, []);

  function submitCheckoutHandler(e) {
    e.preventDefault();

    const email = e.target.email.value;
    const fullName = e.target.fullName.value;
    const address = e.target.address.value;
    const delivery = e.target.delivery.value;
    console.log({
      email,
      fullName,
      address,
      delivery,
      ...dataOrder,
      productList,
    });
  }

  return (
    <>
      <form
        onSubmit={submitCheckoutHandler}
        className="px-4 lg:px-8 md:px-12 xl:px-24 pt-[90px]"
      >
        <h1 className="text-3xl">Payment Details</h1>
        <div className="grid grid-cols-1 md:grid-cols-7 md:gap-8">
          <OrderListComponent
            productList={productList}
            setProductList={setProductList}
          />
          <PaymentAndInfoDelivery setDeliveryCost={setDeliveryCost} />
          <TotalPayment
            productList={productList}
            deliveryCost={deliveryCost}
            setDataOrder={setDataOrder}
          />
        </div>
      </form>
    </>
  );
}
