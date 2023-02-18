import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Product(props){

    const [wishlist, setWishlist] = useState(false);
    const [cart, setCart] = useState(false);

    function postwishlist(){
      
    }

    function postcart(){

    }

    return(
        <ProductContainer to={`/products/${props.code}`}>
            <img src={props.img} />
            <h2>{props.code}</h2>
            <h3>{props.price}</h3>
            <div>
                {wishlist ? <ion-icon name="heart" onClick={postwishlist} /> : <ion-icon name="heart-outline" onClick={postwishlist} />}
                {cart ? <ion-icon name="cart" onClick={postcart} /> : <ion-icon name="cart-outline" onClick={postcart} />}
            </div>
        </ProductContainer>
    )
}

const ProductContainer = styled(Link)`
width: 23.5%;
height: 400px;
display: flex;
background-color: #F9EAE3;
flex-direction: column;
padding: 20px;
border-radius: 6px;
align-items: center;
img{
    width: 90%;
    border-radius: 2px;
    background-color: #F9EAE3;
    height: 360px;
}
h2{
    font-weight: bold;
    font-size: 16px;
    background-color: #F9EAE3;
}
h3{
   font-size: 14px;
   background-color: #F9EAE3;
}

ion-icon{
    font-size: 32px;
    color: black;
    background-color: #F9EAE3;
}

div{
    display: flex;
    margin-top: 10px;
    width: 100%;
    justify-content: center;
    gap: 8px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: #F9EAE3;

}
`