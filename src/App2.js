import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/GlobalStyle";
import LoginPage from "./pages/LoginPage";

export default function App2(){
    return(
        <>
        <GlobalStyle />
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<LoginPage />} />
        </Routes>
        </BrowserRouter>
        </>
    )
}