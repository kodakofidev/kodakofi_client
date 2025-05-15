import { BrowserRouter, Routes, Route } from "react-router";
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
          <Route path="/" element={<div className="mt-16"><Card /> </div>} />
        </Route>
      </Routes>

    {/* Admin Layouts */}

    </BrowserRouter>
  );
};

export default Router;
