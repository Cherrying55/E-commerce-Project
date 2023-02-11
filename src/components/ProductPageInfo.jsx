import { useState } from "react";
import styled from "styled-components";
import Color from "../assets/Color";

export default function ProductPageInfo(props){

    const [sizeSelected, setSizeSelected] = useState(false);
    const [colorSelected, setColorSelected] = useState(false);
    const [wishlist, setWishlist] = useState(false);

    return(
        <Container>
            {wishlist ? <ion-icon name="heart" /> : <ion-icon name="heart-outline" />}
           <h1>{props.name}</h1>
           <h1>{props.price}</h1>
           <div>
            {props.colors.map(
                (c) => <Color color={c} />
            )}
           </div>
           <select>
            {props.sizes.map(
                (s) => <option>{s}</option>
            )}
           </select>
           <button disabled={sizeSelected && colorSelected ? false : true}>{sizeSelected && colorSelected ? "Add to cart" : "Please select a size and color"}</button>

        </Container>
    )
}

const Container = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
padding: 30px;
gap: 20px;

h1{
    font-size: 24px;
    font-weight: bold;
}

div{
    display: flex;
    width: 80%;
    gap: 4%;
    flex-wrap: wrap;
}

div div{
    width: 22px;
}

select{
    width: 80%;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 16px;
}

button{
    height: 28px;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 16px;
    background-color: grey;
}

ion-icon{
    font-size: 29px;
    display: flex;
    justify-content: flex-end;
    width: 80%;
}
`