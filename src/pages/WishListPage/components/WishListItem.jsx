import styled from "styled-components"

export function WishListItem(){

    //will have trash ion-icon

    return(
        <ItemContainer>
            <img src="https://i.imgur.com/zXfm0q3.jpg" />
            <div>
                <h1>Black top skirt with golden</h1>
                <h2>Color: Blue</h2>
                <h2>Size: WOMEN P</h2>
                <h1>Price: $50</h1>
                <button>ADD TO CART</button>
                <button>REMOVE</button>
            </div>
        </ItemContainer>
    )
}

const ItemContainer = styled.div`
display: flex;
gap: 5px;
position: relative;
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

button{
    display: flex;
    align-items: center;
    height: 40px;
    border: none;
    font-weight: bold;
    justify-content: center;
    font-size: 14px;
    padding: 10px;
    width: 12%;
}

button:first-of-type{
    position: absolute;
    bottom: calc(50% + 45px);
    right: 0;
    background: red;
    color: white;
}

button:nth-of-type(2){
    position: absolute;
    bottom: calc(50% - 5px);
    right: 0;
    background: #e6e2e1;
    color: black;
}
`