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