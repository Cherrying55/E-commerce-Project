import styled from "styled-components";
import ProductImagesScroller from "../components/ProductImagesScroller";
import ProductPageInfo from "../components/ProductPageInfo";
import Header from "../components/Header";


export default function ProductPage(){

    //const params = useParams();
    //get com id de params retornará as imagens adicionais, size, cores;
    const ob = {name: "1", price: "R$ 14,90", colors:["green", "black", "red"], sizes:[13,14,15]};

    return(
        <>
        <Header />
        <ProductContainer>
            <ProductImagesScroller />
            <ProductPageInfo name={ob.name} price={ob.price} colors={ob.colors} sizes={ob.sizes} />
        </ProductContainer>
        </>
    )
}

const ProductContainer = styled.div`
margin-top: 90px;
width: 100%;
display: flex;
justify-content: center;
height: 700px;
`