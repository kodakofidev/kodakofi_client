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

        {/* Admin Routes - require admin role */}
        <Route element={<ProtectedRoute requiredRole="admin" />}>
          <Route path="admin" element={<AdminLayouts />}>
            {/* <Route index element={<Dashboard />}></Route> */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
