import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import CheckoutPage from "./pages/CheckoutPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
