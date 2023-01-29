import Header from "../components/Header"

export default function ProductsPage(){

    const params = useParams();

    return(
        <>
        <Header />
        <Container>
            <ProductsContainer>
                {
                    products.map(
                        (p) => <Product code={p.code} price={p.price} img={p.img} />
                    )
                }
            </ProductsContainer>
        </Container>
        </>
    )
}