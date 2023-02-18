
import Main from "../assets/Main";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Product from "../components/Product";

export default function ProductsPage(){

    // const params = useParams();
    const array1 = [{
        code: 1,
        price: "R$ 14,00",
        img: "https://i.imgur.com/2Tnn1i3.png"
    }, {
        code: 2,
        price: "R$ 14,00",
        img: "https://i.imgur.com/JAc3U1z.png"
    }, {
        code: 3,
        price: "R$ 14,00",
        img: "https://i.imgur.com/5E3R0nb.png"
    }, {
        code: 4,
        price: "R$ 14,00",
        img: "https://i.imgur.com/orwMI0W.png"
    }, {
        code: 5,
        price: "R$ 14,00",
        img: "https://i.imgur.com/2Tnn1i3.png"
    }, {
        code: 6,
        price: "R$ 14,00",
        img: "https://i.imgur.com/2Tnn1i3.png"
    }];
    const [products, setProducts] = useState(array1);

    return(
        <>
        <Header />
        <Container>
        <CityImage></CityImage>
        <BlackFilter>Imagine a new future</BlackFilter>
        </Container>
        <Main>
            <ProductsContainer>
                {
                    products.map(
                        (p) => <Product code={p.code} price={p.price} img={p.img} />
                    )
                }
            </ProductsContainer>
        </Main>
        </>
    )
}

const ProductsContainer = styled.div`
width: 90%;
display: flex;
flex-wrap: wrap;
gap: 1%;
height: 100%;
margin-bottom: 40px;
justify-content: center;
`

const Divisor = styled.div`
height: 200px;
margin-top: 90px;
width: 100%;
background-color: #161a1a;
margin-bottom: 10px;
`

const CityImage = styled.div`
width: 100%;
background: url("https://i.imgur.com/KFBwBa5.jpg");
background-size: 100% 100%;
position: absolute;
z-index: 1;
position: relative;
height: 100%;

`

const BlackFilter = styled.div`
height: 100%;
width: 100%;
background-color: rgba(0, 0, 0, 0.8);
z-index: 2;
position: absolute;
top: 0;
left: 0;

color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 32px;
font-weight: 900;
`

const Container = styled.div`
height: 310px;
width: 100%;
position: relative;
margin-top: 70px;

`