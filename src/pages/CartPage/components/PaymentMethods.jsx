import styled from "styled-components"
import mastercard from "../images/mastercard.png"
import paypal from "../images/paypal.png"
import visa from "../images/visa.png"

export function PaymentMethods(){
    return(
        <PaymentMethodContainer>
            <h1>We accept:</h1>
        <div>
            <img src={mastercard} />
            <img src={paypal} />
            <img src={visa} />
        </div>
        </PaymentMethodContainer>
    )
}

const PaymentMethodContainer = styled.div`
margin-top: 20px;
div{
    display: flex;
gap: 20px;
flex-wrap: wrap;
}
width: 100%;
align-self: center;
h1{
    color: black;
    font-size: 24px;
    font-weight: 1000;
    text-align: start;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

img{
    width: 55px;
}
`