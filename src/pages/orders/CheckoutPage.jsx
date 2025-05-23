import React, { useEffect, useState } from "react";
import OrderListComponent from "../../components/Checkout/OrderListComponent";
import PaymentAndInfoDelivery from "../../components/Checkout/PaymentAndInfoDelivery";
import TotalPayment from "../../components/Checkout/TotalPayment";
import ModalPaymentMethode from "../../components/Checkout/ModalPaymentMethode";
import { useSelector, useDispatch } from "react-redux";
import constant from "../../configs/constant"
import { useNavigate } from "react-router";
import { deleteOrder } from "../../redux/slices/orderSlice";

export default function CheckoutPage() {
  const [productList, setProductList] = useState([]);
  const [deliveryCost, setDeliveryCost] = useState(0);
  const [paymentMethodeModal, setPaymentMethodeModal] = useState(false);
  const [delivery, setDelivery] = useState("");
  const { data } = useSelector((state) => state.order);
  const token = useSelector((state) => state.auth.user.token);
  // validasi
  const [validationPaymentMethode, setValidationPaymentMethode] = useState(0);
  const [validationEmail, setValidationEmail] = useState(true);
  const [validationFullName, setValidationFullName] = useState(true);
  const [validationAddress, setValidationAddress] = useState(true);
  const [validationDelivery, setValidationDelivery] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setProductList(data);
  }, [productList, data]);

  function submitCheckoutHandler(e) {
    e.preventDefault();
    const paymentMethode = e.target.paymentMethode.value;
    const email = e.target.email.value;
    const fullName = e.target.fullName.value;
    const address = e.target.address.value;
    const delivery = e.target.delivery.value;
    const items = [];
    productList.forEach((item) => {
      if (item.size === "") {
        items.push({product_id: item.id, qty: item.qty});
      } else {
        items.push({product_id: item.id, qty: item.qty, size_id: item.size_id, is_iced: item.is_iced});
      }
    })

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
        const dataOrder = {
          email,
          fullname: fullName,
          address,
          delivery_method_id: parseInt(delivery),
          payment_method_id: parseInt(paymentMethode),
          items,
        };

        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(dataOrder)
        };

        fetch(`${constant.apiUrl}/order`, options)
        .then(response => {
          if (!response.ok) {
            throw new Error('HTTP error! status: ' + response.status);
          }
          return response.json();
        })
        .then(result => {
          console.log('Response:', result);
        })
        .catch(error => {
          console.error('Error:', error);
        });
        setPaymentMethodeModal(false);
        dispatch(deleteOrder());
        navigate("/history");
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
        className="px-4 pt-[90px] md:px-12 lg:px-8 xl:px-24"
      >
        <h1 className="text-3xl">Payment Details</h1>
        <div className="grid grid-cols-1 md:grid-cols-7 md:gap-8">
          <OrderListComponent
            productList={productList}
            setProductList={setProductList}
            delivery={delivery}
          />
          <PaymentAndInfoDelivery
            setDeliveryCost={setDeliveryCost}
            validationEmail={validationEmail}
            validationFullName={validationFullName}
            validationAddress={validationAddress}
            validationDelivery={validationDelivery}
            setDelivery={setDelivery}
          />
          <TotalPayment
            productList={productList}
            deliveryCost={deliveryCost}
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
