import { useState } from "react";
import styled from "styled-components";

export function AddressEditComponent(props){
    const [openForm, setOpenForm] = useState(false);

    function open(){
        if(!openForm){
            setOpenForm(true)
        }
    }

    function close(){
        if(openForm){
            setOpenForm(false)
        }
    }

    return(
        <Wrapper openForm={openForm}>
        <input placeholder={props.v}  disabled={!openForm} />
        {!openForm && props.openedit ? <ion-icon name="create-outline" onClick={open}></ion-icon> : (!openForm && !props.openedit ? <></> : <ion-icon name="close-outline" onClick={close}></ion-icon>)}
        </Wrapper>
    )

}

const Wrapper = styled.div`
input{
    border: ${props => props.openForm ? "0.5px solid black" : "none"}
}

input::placeholder {
    color: black;
    opacity: 1; /* Firefox */
  }
`