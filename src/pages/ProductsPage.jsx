
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
    const [products, setProducts] = useState(array1);

    return(
        <>
        <Header />
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
width: 100%;
display: flex;
flex-wrap: wrap;
gap: 2%;
`