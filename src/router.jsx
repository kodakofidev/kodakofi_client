import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./pages/Home";
import CheckoutPage from "./pages/orders/CheckoutPage";
import HistoryOrderPage from "./pages/orders/HistoryOrderPage";
import AuthRoutes from "./routing/auth";
import MainLayout from "./layouts/MainLayouts";
import AdminLayouts from "./layouts/AdminLayouts";
import ProfilePage from "./pages/ProfilePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Layouts */}
        <Route>{AuthRoutes()}</Route>

        {/* Main Layouts */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/history-order" element={<HistoryOrderPage />} />
          <Route path="/profile" element={<ProfilePage />} />
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
