import { BrowserRouter, Routes, Route } from "react-router"
import ProductDetails from "./pages/product/ProductDetails"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
