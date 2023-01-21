/* import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import styled from "styled-components";


const AuthProvider = styled.div``;

export default function App(){

    return(
        <AuthProvider>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products/:producttype" element={<ProductsPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/sign-up" element={<SignUpPage />} />
                <Route path="/user" element={<AccountPage />} />
            </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
} */