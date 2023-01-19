

export default function ProductsPage(){


    return(
        <Container>
            <ProductsNavBar />
            <ProductsContainer>
                {
                    products.map(
                        (p) => <Product code={p.code} price={p.price} />
                    )
                }
            </ProductsContainer>
        </Container>
    )
}