import Product from "./Product";
import styled from "styled-components";

export default function BestSelling(props){

    return(
        <Container>
            {props.list.map(
                (p) => <Product code={p.code} price={p.price} img={p.img} />
            )}
        </Container>
    )
}

const Container = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
gap: 2%;
`