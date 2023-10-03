import { useState, useEffect} from "react"
import styled from "styled-components"
import { AddressEditComponent } from "./AddressEditComponent"

export function Address(props){
   const [openedit, setOpenEdit] = useState(false)
   const [formdata, setFormData] = useState({addresstype: "", country: "", state: "", city: "", zipcode: "", street: "", number: "", complemento: ""})
   useEffect(() => {
    console.log("Address type" + props.adress?.addresstype)
   }, [props])
    return(
        <AddressContainer openedit={openedit}>
            <div>
                <h2>Type</h2>
                <AddressEditComponent v={props.address?.addresstype} openedit={openedit} />
                <h2>Country</h2>
                <AddressEditComponent v={props.address?.country} openedit={openedit} />
            </div>
            <div>
            <h2>State</h2>
            <AddressEditComponent v={props.address?.state} openedit={openedit} />
                <h2>City</h2>
                <AddressEditComponent v={props.address?.city} openedit={openedit} />
            </div>
            <div>
                <h2>Zip code</h2>
                <AddressEditComponent v={props.address?.zipcode} openedit={openedit} />
                <h2>Street</h2>
                <AddressEditComponent v={props.address?.street} openedit={openedit} />
                <h2>Number</h2>
                <AddressEditComponent v={props.address?.number} openedit={openedit} />
            </div>
            <div>
                <h2>Complement</h2>
                <AddressEditComponent v={props.address?.complemento} openedit={openedit} />
                {openedit ? <><button type="submit">Submit</button>
                <button onClick={() => {setOpenEdit(false)}}>Cancel</button></> : <>
                <button onClick={() => {setOpenEdit(true)}}>Edit</button>
                <button>Delete</button></>}
                </div>
        </AddressContainer>
    )
}

const AddressContainer = styled.div`
border: 0.5px solid black;
width: 100%;
display: flex;
justify-content: space-between;
padding: 20px;
height: 300px;
margin-bottom: 20px;
border-radius: 3px;

div{
    display: flex;
    flex-direction: column;
    gap: 10px;
    h2 {
        font-size: 18px;
        margin-bottom: 12px;
      }
    
    input, h3 {
        font-size: 16px;
        margin-bottom: 20px;
        display: flex;
        gap: 5px;
      }

    ion-icon{
        font-size: 20px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    input{
        width: ${props => props.openedit ? "50%" : "fit-content"};
        height: 30px;
        padding: 3px;
        color: black;
    }
}

div div{
    width: 100%;
        display: flex;
        gap: 4px;
        flex-direction: row;
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
