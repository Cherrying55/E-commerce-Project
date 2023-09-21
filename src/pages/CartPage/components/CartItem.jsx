import styled from "styled-components"

export function CartItem(){

    //will have trash ion-icon

    return(
        <ItemContainer>
            <img src="https://i.imgur.com/zXfm0q3.jpg" />
            <div>
                <h1>Black top skirt with golden <span>Quantity: 1</span></h1>
                <h2>Color: Blue</h2>
                <h2>Size: WOMEN P</h2>
                <h1>Price: $50</h1>
            </div>
        </ItemContainer>
    )
}

const ItemContainer = styled.div`
display: flex;
gap: 5px;
img{
    width: 128px;
}
width: 100%;

div{
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
}

h1, h2{
    font-size: 18px;
    display: flex;
    width: 100%;
    justify-content: space-between;
}

h1{
    font-weight: bold;
}

span{
    font-size: 16px;
}
`