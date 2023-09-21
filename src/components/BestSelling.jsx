import Product from "./Product";
import styled from "styled-components";
import { Breadcrumb } from "./Breadcrumb";

export default function BestSelling(props){

    const list = [{text: "Home", active: false}, {text:"Product", active: true}]

    return(
        <Content>
            <Breadcrumb list={list} />
            <h1>{props.name}</h1>
            <hr></hr>
        <Container>
            <Product code="Top skirt" price="50.00" img="https://i.imgur.com/zXfm0q3.jpg" />
            <Product code="Top skirt" price="50.00" img="https://i.imgur.com/zXfm0q3.jpg" />
            <Product code="Top skirt" price="50.00" img="https://i.imgur.com/zXfm0q3.jpg" />
            <Product code="Top skirt" price="50.00" img="https://i.imgur.com/zXfm0q3.jpg" />
            <Product code="Top skirt" price="50.00" img="https://i.imgur.com/zXfm0q3.jpg" />
            <Product code="Top skirt" price="50.00" img="https://i.imgur.com/zXfm0q3.jpg" />
            <Product code="Top skirt" price="50.00" img="https://i.imgur.com/zXfm0q3.jpg" />
            <Product code="Top skirt" price="50.00" img="https://i.imgur.com/zXfm0q3.jpg" />
        </Container>
        </Content>
    )
}

const Container = styled.div`
display: flex;
gap: 4%;
flex-wrap: wrap;
margin-top: 36px;
`

const Content = styled.div`
margin-top: 60px;
padding-left: 6%;
padding-right: 6%;
width: 100%;
padding-top: 10vh;

h1{
    font-size: 30px;
    font-weight: 1000;
    color: black;
    margin-bottom: 10px;
}

hr{
    height: 0.5px;
    color: gray;
    width: 100%;
}


`

const StyledBreadcumb = styled(Breadcrumb)`
display: flex;
`