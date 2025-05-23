import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./pages/Home";
import CheckoutPage from "./pages/orders/CheckoutPage";
import AuthRoutes from "./routing/auth";
import MainLayout from "./layouts/MainLayouts";
import AdminLayouts from "./layouts/AdminLayouts";
import ProfilePage from "./pages/ProfilePage";
import HistoryOrderPage from "./pages/orders/HistoryOrderPage";
import ProductList from "./pages/product/ProductList";
import ProductDetails from "./pages/product/ProductDetails";
import ProtectedRoute from "./components/ProtectedRoute";
import ProductListAdmin from "./pages/admin/ProductListAdmin";
import OrdersAdmin from "./pages/admin/OrdersAdmin";
import UsersAdmin from "./pages/admin/UsersAdmin";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Layouts */}
        <Route>{AuthRoutes()}</Route>

        {/* Main Layouts */}
        <Route element={<MainLayout />}>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />

          {/* Protected Routes - require login */}
          <Route element={<ProtectedRoute />}>
            <Route path="/history" element={<HistoryOrderPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
        </Route>
        {/* Layouting Admin */}
        <Route path="admin" element={<AdminLayouts />}>
          <Route path="products" element={<ProductListAdmin />} />
          <Route path="orders" element={<OrdersAdmin />}/>
          <Route path="users" element={<UsersAdmin />}/>
          {/* <Route index element={<Dashboard />}></Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
