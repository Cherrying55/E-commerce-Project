import Header from "../components/Header";
import styled from "styled-components";
import Slider from "../components/Slider";
import { useEffect, useState } from "react";
import BestSelling from "../components/BestSelling";

export default function HomePage(){


    const array1 = [{
        code: 1,
        price: "R$ 14,00",
        img: "https://i.imgur.com/Psif1DC.jpg"
    }, {
        code: 2,
        price: "R$ 14,00",
        img: "https://i.imgur.com/Psif1DC.jpg"
    }, {
        code: 3,
        price: "R$ 14,00",
        img: "https://i.imgur.com/Psif1DC.jpg"
    }, {
        code: 4,
        price: "R$ 14,00",
        img: "https://i.imgur.com/Psif1DC.jpg"
    }];
    const [bestselling, setBestSelling] = useState(array1);
    

    return(
        <>
            <Header />
        <Container>    
            <Slider />
            <h1>Best Selling</h1>
            <BestSelling list={bestselling} />
        </Container>
        </>
    )
}

const Container = styled.div`
margin-top: 90px;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
h1{
    font-weight: bold;
    font-size: 28px;
}
`

//useEffect(setbestselling, []);