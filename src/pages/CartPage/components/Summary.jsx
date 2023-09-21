import styled from "styled-components"
import { PaymentMethods } from "./PaymentMethods"

export function Summary(props){

    return(
        <>
        <SummaryContainer>
            <h1>Order Summary <span>{props.item_amount} Item(s)</span></h1>
            <hr></hr>
            <h2>Items subtotal  <span>${props.subtotal}</span></h2>
            <h2>Shipping <span>${props.shipping} </span></h2>
            <h2>Estimated tax <span>${props.tax}</span></h2>
            <hr></hr>
            <h1>Order total <span>${props.subtotal + props.shipping + props.tax}</span></h1>
            <button>CHECKOUT</button>
            <PaymentMethods />
        </SummaryContainer>
        </>
    )
}

const SummaryContainer = styled.div`
width: calc(40% - 80px);
display: flex;
flex-direction: column;
gap: 5px;

>h1{
    text-align: center;
}

hr{
    width: 100%;
    background: #c0c0c0;
    height: 1px;
    border: none;
}
h1{
    color: black;
    font-size: 24px;
    font-weight: 1000;
    text-align: start;
    display: flex;
    justify-content: space-between;
}

h2{
    font-size: 19px;
    display: flex;
    width: 100%;
    justify-content: space-between;
}

h2 span{
    font-size: 19px;
}

h1 span{
    font-size: 24px;
}

button{
    background: #e6e2e1;
    display: flex;
    align-items: center;
    height: 40px;
    color: black;
    border: none;
    font-weight: bold;
    justify-content: center;
    font-size: 16px;
    width: 100%;
    margin-top: 10px;

}
`
