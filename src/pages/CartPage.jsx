import styled from "styled-components";
import CartItem from "../components/CartItem";
import Header from "../components/Header";

export default function CartPage(){

    //usará context de cart ou fará request pro api usando auth.property 

    const cart = {items:[{code: "1", price: "14.90", img: "https://i.imgur.com/Psif1DC.jpg"},
    {code: "2", price: "14.90", img: "https://i.imgur.com/Psif1DC.jpg"}, 
    {code: "3", price: "14.90", img: "https://i.imgur.com/Psif1DC.jpg"},
    {code: "4", price: "14.90", img: "https://i.imgur.com/Psif1DC.jpg"},
    {code: "5", price: "14.90", img: "https://i.imgur.com/Psif1DC.jpg"},
    {code: "6", price: "14.90", img: "https://i.imgur.com/Psif1DC.jpg"},
    {code: "7", price: "14.90", img: "https://i.imgur.com/Psif1DC.jpg"},
    {code: "8", price: "14.90", img: "https://i.imgur.com/Psif1DC.jpg"},
    {code: "8", price: "14.90", img: "https://i.imgur.com/Psif1DC.jpg"},
    {code: "8", price: "14.90", img: "https://i.imgur.com/Psif1DC.jpg"},
    {code: "8", price: "14.90", img: "https://i.imgur.com/Psif1DC.jpg"},
    {code: "8", price: "14.90", img: "https://i.imgur.com/Psif1DC.jpg"}]}
    

    return(
        <>
        <Header />
        <Container>
            <h1>Shopping cart</h1>
            <h4>To save your shopping bag, login or register</h4>
            <CartItemsContainer>
                {
                    cart.items.map(
                        (i) => <CartItem code={i.code} img={i.img} price={i.price} />
                    )
                }
            </CartItemsContainer>
            <h1>Total Price: {"1"}</h1>
            <button>Purchase</button>
        </Container>
        </>
    )
}

const Container = styled.div`
margin-top: 110px;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;

h1{
    font-weight: bold;
    font-size: 28px;
}

h4{
    font-size: 20px;
}

button{
    width: 20%;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    background: gray;
}

`

const CartItemsContainer = styled.div`
width: 90%;
display: flex;
gap: 10px;
overflow-x: scroll;
`