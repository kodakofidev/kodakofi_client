import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./pages/Home";
import CheckoutPage from "./pages/orders/CheckoutPage";
import AuthRoutes from "./routing/auth";
import MainLayout from "./layouts/MainLayouts";
import AdminLayouts from "./layouts/AdminLayouts";
import ProfilePage from "./pages/ProfilePage";
import HistoryOrderPage from "./pages/orders/HistoryOrderPage";
import ProductList from "./components/product/ProductList";
import ProductListAdmin from "./pages/admin/ProductListAdmin";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Layouts */}
        <Route>{AuthRoutes()}</Route>

        {/* Main Layouts */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/products" element={<ProductList />} />
          <Route path="/history" element={<HistoryOrderPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>

        {/* Layouting Admin */}
        <Route path="admin" element={<AdminLayouts />}>
          <Route path="products" element={<ProductListAdmin />} />
          {/* <Route index element={<Dashboard />}></Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
