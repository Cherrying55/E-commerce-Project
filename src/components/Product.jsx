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
flex-direction: column;
align-items: center;
img{
    width: 90%;
}
h2{
    font-weight: bold;
    font-size: 16px;
}
h3{
   font-size: 14px;
}

ion-icon{
    font-size: 32px;
    color: black;
}

div{
    display: flex;
    margin-top: 10px;
    width: 100%;
    justify-content: center;
    gap: 8px;
    padding-left: 10px;
    padding-right: 10px;

}
`