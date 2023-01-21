import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Menu(){
    return(
        <Container>
            <Link to="/products/dresses">DRESSES</Link>
            <Link to="/products/skirts">SKIRTS</Link>
            <Link to="/products/tops">TOPS</Link>
            <Link to="/products/bags">BAGS</Link>
        </Container>
    )
}


const Container = styled.div`
display: flex;
height: 100%;
align-items: center;
gap: 4px;

a{
    text-decoration: none;
}
`