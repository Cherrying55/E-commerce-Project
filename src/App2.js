import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/GlobalStyle";
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import ProductsPage from "./pages/ProductsPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";

export default function App2(){
    return(
        <>
        <GlobalStyle />
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/purchase" element={<OrderPage />} />
        </Routes>
        </BrowserRouter>
        </>
    )
}