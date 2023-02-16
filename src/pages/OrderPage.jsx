import SignForm from "../assets/SignForm";
import Main from "../assets/Main";
import { useState } from "react";
import PaymentMethods from "../components/PaymentMethods";
import PaymentForm from "../components/PaymentForm";
import Header from "../components/Header";

export default function OrderPage(){

    const [paymentMethod, setPaymentMethod] = useState({defined: false, method: 1});

    return(
        <>
        <Header />
        <Main>
        <h1>Select your payment method</h1>
        {
            !paymentMethod.defined? <PaymentMethods setPaymentMethod={setPaymentMethod} /> : <PaymentForm type={paymentMethod.method} />
        }
        <PaymentForm />
        </Main>
        </>
    )
}