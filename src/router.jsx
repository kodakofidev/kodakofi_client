import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./pages/Home";
import CheckoutPage from "./pages/CheckoutPage";
import AuthRoutes from "./routing/auth";
import MainLayout from "./layouts/MainLayouts";
import Card from "./components/Card";

const Router = () => {
  return (
    <BrowserRouter>
      {/* Auth Route */}
      <Routes>{AuthRoutes()}</Routes>

      {/* Main Layouts */}
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Route>
      </Routes>

      {/* Admin Layouts */}
    </BrowserRouter>
  );
};

export default Router;
