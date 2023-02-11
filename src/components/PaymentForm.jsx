import SignForm from "../assets/SignForm";
import { useState } from "react";

export default function PaymentForm(props){

    const [data, setData] = useState({cardname: "", cardnumber: "", securitycode: "", date: ""})

    return(
        
        <SignForm>
            <input type="text" name="cardname" placeholder="Card Name" />
            <input type="text" name="cardnumber" placeholder="Card number" />
            <input type="text" name="securitycode" placeholder="Security Code" />
            <input type="date" name="date" placeholder="Expiration Date" />
            <button type="submit">Order</button>
        </SignForm>
    )
}