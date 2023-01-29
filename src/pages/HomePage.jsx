import Header from "../components/Header";
import styled from "styled-components";
import Slider from "../components/Slider";
import { useEffect } from "react";

export default function HomePage(){

    const [bestselling, setBestSelling] = useState([]);
    
    useEffect(setbestselling, []);

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