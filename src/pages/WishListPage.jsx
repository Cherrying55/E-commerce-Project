import styled from "styled-components";
import Main from "../assets/Main";
import WishItem from "../components/WishItem";

export default function WishListPage(){
    


    return(
        <Main>
            <h1>Items you wish</h1>
            <WishlistContainer>
                {
                     wish.items.map(
                        (w) => <WishItem code={w.code} img={w.img} price={w.price} />
                     )
                }
            </WishlistContainer>
        </Main>
    )
}

const WishlistContainer = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
gap: 2%;
`