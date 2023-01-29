import Header from "../components/Header";
import styled from "styled-components";

export default function HomePage(){

    return(
        <>
            <Header />
        <Container>    
            <Slider />
            <h1>Best Selling</h1>
            <BestSelling />
        </Container>
        </>
    )
}