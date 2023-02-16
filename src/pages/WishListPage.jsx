import styled from "styled-components";
import Main from "../assets/Main";
import Header from "../components/Header";
import WishItem from "../components/WishItem";

export default function WishListPage(){
    
    const wish = {items: [{
        code: 1,
        price: "R$ 14,00",
        img: "https://i.imgur.com/Psif1DC.jpg"
    }, {
        code: 2,
        price: "R$ 14,00",
        img: "https://i.imgur.com/Psif1DC.jpg"
    }, {
        code: 3,
        price: "R$ 14,00",
        img: "https://i.imgur.com/Psif1DC.jpg"
    }, {
        code: 4,
        price: "R$ 14,00",
        img: "https://i.imgur.com/Psif1DC.jpg"
    }]
}

    return(
        <>
        <Header />
        <Main>
            <Styledh1>Items you wish</Styledh1>
            <WishlistContainer>
                {
                     wish.items.map(
                        (w) => <WishItem code={w.code} img={w.img} price={w.price} />
                     )
                }
            </WishlistContainer>
        </Main>
        </>
    )
}

const WishlistContainer = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
gap: 2%;

`

const Styledh1 = styled.h1`

    font-weight: bold;
    font-size: 28px;
   margin-top: 10px;
   margin-bottom: 10px;
`