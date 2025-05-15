import { BrowserRouter, Routes, Route } from "react-router";
import AuthRoutes from "./routing/auth";
import MainLayout from "./layouts/MainLayouts";

const Router = () => {
  return (
    <BrowserRouter>
      {/* Auth Route */}
      <Routes>{AuthRoutes()}</Routes>

      {/* Main Layouts */}
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<h1> WELCOME TO KODA KOFI </h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
