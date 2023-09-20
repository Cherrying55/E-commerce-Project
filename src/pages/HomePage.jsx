import Header from "../components/Header";
import styled from "styled-components";
import Slider from "../components/Slider";
import { useEffect, useState } from "react";
import BestSelling from "../components/BestSelling"

export default function HomePage(){

    const [bestselling, setBestSelling] = useState([]);
    

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

`