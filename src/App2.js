import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/GlobalStyle";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductsPage from "./pages/ProductsPage";
import SignUpPage from "./pages/SignUpPage"
import CartPage from "./pages/CartPage/CartPage";

export default function App2(){
    return(
        <>
        <GlobalStyle />
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/products/:category" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
        </Routes>
        </BrowserRouter>
        </>
    )
}