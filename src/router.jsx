import { BrowserRouter, Routes, Route } from "react-router";
import AuthRoutes from "./routing/auth";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1> WELCOME TO KODA KOFI </h1>} />
        {AuthRoutes()}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
