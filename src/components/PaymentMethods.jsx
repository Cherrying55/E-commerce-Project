import styled from "styled-components";

export default function PaymentMethods(props){

    return(
        <Container>
                <img src="../assets/paypal.svg"/>
                <img src="../assets/paypal.svg" />
                <img src="../assets/paypal.svg" />
                <img src="../assets/paypal.svg" />
        </Container>
    )
}

const Container = styled.div`
display: flex;
width: 90%;
gap: 10px;
justify-content: center;

img{
    width: 200px;
    border: 0.5px solid gray;
    padding: 8px;
}
`