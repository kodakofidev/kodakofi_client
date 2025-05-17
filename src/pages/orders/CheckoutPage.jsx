import React, { useEffect, useState } from "react";
import OrderListComponent from "../../components/Checkout/OrderListComponent";
import PaymentAndInfoDelivery from "../../components/Checkout/PaymentAndInfoDelivery";
import TotalPayment from "../../components/Checkout/TotalPayment";
import ModalPaymentMethode from "../../components/Checkout/ModalPaymentMethode";

export default function CheckoutPage() {
  const [productList, setProductList] = useState([]);
  const [deliveryCost, setDeliveryCost] = useState(0);
  const [dataOrder, setDataOrder] = useState({});
  const [paymentMethodeModal, setPaymentMethodeModal] = useState(false);

  // validasi
  const [validationPaymentMethode, setValidationPaymentMethode] = useState(0);
  const [validationEmail, setValidationEmail] = useState(true);
  const [validationFullName, setValidationFullName] = useState(true);
  const [validationAddress, setValidationAddress] = useState(true);
  const [validationDelivery, setValidationDelivery] = useState(true);

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
    const paymentMethode = e.target.paymentMethode.value;
    const email = e.target.email.value;
    const fullName = e.target.fullName.value;
    const address = e.target.address.value;
    const delivery = e.target.delivery.value;

    email != "" ? setValidationEmail(true) : setValidationEmail(true);

    fullName != "" ? setValidationFullName(true) : setValidationFullName(false);

    address != "" ? setValidationAddress(true) : setValidationAddress(false);

    delivery != "" ? setValidationDelivery(true) : setValidationDelivery(false);

    if (
      email != "" &&
      fullName != "" &&
      address != "" &&
      delivery != "" &&
      productList.length !== 0
    ) {
      paymentMethode != ""
        ? setValidationPaymentMethode(0)
        : setValidationPaymentMethode(validationPaymentMethode + 1);
      setPaymentMethodeModal(true);
      if (paymentMethode != "") {
        console.log("ok");
        console.log({
          email,
          fullName,
          address,
          delivery,
          paymentMethode,
          ...dataOrder,
          productList,
        });
        setPaymentMethodeModal(false);
      }
    } else {
      email != "" ? setValidationEmail(true) : setValidationEmail(false);

      fullName != ""
        ? setValidationFullName(true)
        : setValidationFullName(false);

      address != "" ? setValidationAddress(true) : setValidationAddress(false);

      delivery != ""
        ? setValidationDelivery(true)
        : setValidationDelivery(false);
      console.log("not ok");
    }
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
          <PaymentAndInfoDelivery
            setDeliveryCost={setDeliveryCost}
            validationEmail={validationEmail}
            validationFullName={validationFullName}
            validationAddress={validationAddress}
            validationDelivery={validationDelivery}
          />
          <TotalPayment
            productList={productList}
            deliveryCost={deliveryCost}
            setDataOrder={setDataOrder}
            setPaymentMethodeModal={setPaymentMethodeModal}
            validationPaymentMethode={validationPaymentMethode}
          />
        </div>
        <ModalPaymentMethode
          setPaymentMethodeModal={setPaymentMethodeModal}
          paymentMethodeModal={paymentMethodeModal}
          validationPaymentMethode={validationPaymentMethode}
        />
      </form>
    </>
  );
}
