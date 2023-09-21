import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Menu from "./Menu";

export default function Header(){

    const navigate = useNavigate();
    let auth = {token: 1};

    return(
        <header>
            <Menu />
            <Logo>STARR</Logo>
            <div>
                <ion-icon name="cart-outline" onClick={() => navigate("/cart")}></ion-icon>
                <ion-icon name="person" onClick={() => {if(auth.token){navigate("/user")}else{navigate("/login")}}}></ion-icon>
                <ion-icon name="heart" onClick={() => navigate("/wishlist")}></ion-icon>
            </div>
        </header>
    )

}

const Logo = styled.h1`
color: black;
font-weight: bold;
font-size: 32px;
height: 100%;
display: flex;
align-items: center;
margin: 0 auto;
width: 33%;
text-align: center;
`

