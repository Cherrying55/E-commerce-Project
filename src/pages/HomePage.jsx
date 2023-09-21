import Header from "../components/Header";
import styled from "styled-components";
import { useEffect, useState } from "react";
import BestSelling from "../components/BestSelling"

export default function HomePage(){

    const [bestselling, setBestSelling] = useState([]);
    

    return(
        <>
            <Header />
            <BestSelling name="All products" />
        </>
    )
}

