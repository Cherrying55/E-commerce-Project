import styled from "styled-components"


export default function CartItem(props){

    return(
        <CartItemContainer>
            <img src={props.img} />
            <h1>{props.code}</h1>
            <h1>{props.price}</h1>
        </CartItemContainer>
    )
}

const CartItemContainer = styled.div`
width: 200px;
display: flex;
flex-direction: column;
gap: 4px;
border: 0.5px solid gray;
padding: 8px;

h1{
    font-size: 16px;
    font-weight: bold;
}
`