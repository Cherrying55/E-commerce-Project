


export default function CartPage(){

    return(
        <Container>
            <Summary />
            <h1>Shopping cart</h1>
            <h4>To save your shopping bag, login or register</h4>
            <CartItemsContainer>
                {
                    cart.items.map(
                        (i) => <CartItem name={i.name} color={i.color} image={i.image} price={i.price} quantity={i.quantity} />
                    )
                }
            </CartItemsContainer>
        </Container>
    )
}