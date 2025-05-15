import { BrowserRouter, Routes, Route } from "react-router";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1> WELCOME TO KODA KOFI </h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
