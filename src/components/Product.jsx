import styled from "styled-components";
import { useState, useEffect } from "react";

export default function Product(props){

    const [wishlist, setWishlist] = useState(false);
    const [cart, setCart] = useState(false);

    return(
        <ProductContainer to={`/products/${props.code}`}>
            <img src={props.img} />
            <h2>{p.code}</h2>
            <h3>{p.price}</h3>
            <div>
                {wishlist ? <ion-icon heart onClick={postwishlist} /> : <ion-icon heartunfilled onClick={postwishlist} />}
                {cart ? <ion-icon cart onClick={postcart} /> : <ion-icon cartunfilled onClick={postcart} />}
            </div>
        </ProductContainer>
    )
}