import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Header(){

    return(
        <header>
            <Menu />
            <Logo>STARR</Logo>
            <div>
                <ion-icon cart/>
                <ion-icon login />
                <ion-icon wishlist/>
            </div>
        </header>
    )

}