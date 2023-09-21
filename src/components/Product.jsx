import styled from "styled-components";
import { useState, useEffect } from "react";

export default function Product(props){

    const [wishlist, setWishlist] = useState(false);
    const [cart, setCart] = useState(false);

    return(
        <ProductContainer to={`/products/${props.code}`}>
            <img src={props.img} />
            <h2>{props.code}</h2>
            <h3>{props.price}</h3>
            <div>
                {wishlist ? <ion-icon name="heart"  /> : <ion-icon name="heart-outline"/>}
                {cart ? <ion-icon name="cart" /> : <ion-icon name="cart-outline" />}
            </div>
        </ProductContainer>
    )
}

const ProductContainer = styled.div`
height: 336px;
width: 194px;
display: flex;
flex-direction: column;
gap: 7px;

img{
    height: 240px;
}

h2{
    font-size: 18px;
    font-weight: bold;
}

h3{
    font-size: 18px;
}

div{
    display: flex;
    gap: 4px;
    
}

ion-icon{
    font-size: 20px;
}
`