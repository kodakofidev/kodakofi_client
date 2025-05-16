import { BrowserRouter, Routes, Route } from "react-router";
// import ProductDetails from "./pages/product/ProductDetails"

import Home from "./pages/Home";
import CheckoutPage from "./pages/orders/CheckoutPage";
import AuthRoutes from "./routing/auth";
import MainLayout from "./layouts/MainLayouts";
import Card from "./components/Card";
import AdminLayouts from "./layouts/AdminLayouts";
// import OrderDetails from "./pages/product/OrderDetails"
// import ProductList from "./pages/products/ProductList";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Layouts */}
        <Route>{AuthRoutes()}</Route>

        {/* Main Layouts */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Card />} />
          {/* <Route path='/products/:id' element={<ProductDetails />} /> */}
          {/* <Route path='/order/:id' element={<OrderDetails />} /> */}
          <Route path="/checkout" element={<CheckoutPage />} />
        </Route>

        {/* Layouting Admin */}
        <Route path="admin" element={<AdminLayouts />}>
          {/* <Route index element={<Dashboard />}></Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
