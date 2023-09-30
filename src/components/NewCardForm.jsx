import { useState } from "react";
import styled from "styled-components"

export function NewCardForm(props){

    const [form,setForm] = useState({pan: "", cardholder: "", expdate: ""})

    function alterardados(e) {
        let newobj = { ...form };
        newobj[e.target.name] = e.target.value;
        setForm({ ...newobj });
      }

    function createnewcard(e){
        e.preventDefault()
        props.setOpenedForm(null)
    }
    

    return(
        <CreditContainer onSubmit={createnewcard}>
            <div>
            <h2>PAN</h2>
                <input name="pan" placeholder="Primary Account Number"></input>
                <h2>Card holder</h2>
                <input name="cardholder" placeholder="Name written in the card"></input>
            </div>
            <div>
                <h2>Expiration date</h2>
                <input type="text" name="expdate" placeholder="Expiration date MM/YY"></input>
                <button type="submit">Add</button>
                <button type="submit">Cancel</button>
                </div>
        </CreditContainer>
    )
}

const CreditContainer = styled.form`
border: 0.5px solid black;
width: 100%;
display: flex;
justify-content: space-between;
padding: 20px;
height: 200px;
margin-bottom: 20px;
border-radius: 3px;

div{
    display: flex;
    flex-direction: column;
    gap: 10px;
    h2 {
        font-size: 18px;
        margin-bottom: 8px;
      }
    
      input {
        font-size: 16px;
        margin-bottom: 10px;
        height: 36px;
        padding: 5px;
        border: 1px solid black;
        width: 100%;
        border-radius: 4px;
      }
}
div button {
    display: flex;
    align-items: center;
    height: 32px;
    border: none;
    font-weight: bold;
    justify-content: center;
    font-size: 14px;
    padding: 10px;
    background: black;
    color: white;
    width: 100%;
  }

  div button:first-of-type {
    background: #e6e2e1;
    color: black;
  }
`