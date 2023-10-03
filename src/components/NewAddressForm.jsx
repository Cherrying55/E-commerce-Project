import { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import axios from "axios";

export default function NewAddressForm(props){

    const [dados, setDados] = useState({addresstype: "",country: "", state: "", city: "", street: "", number: "", complemento: "", zipcode: ""})
    const filter = useSelector(state => state.userReducer.currentUser)

    function alterardados(e) {
        let newobj = { ...dados };
        newobj[e.target.name] = e.target.value;
        setDados({ ...newobj });
        console.log(dados)
    }

    function createAddress(e){
        e.preventDefault()
        axios.post(`http://localhost:4000/auth/billing`, dados, {headers:{
            "Authorization": `Bearer ${filter.token}`
        }})
        .then(
            (res) => {
                props.setOpenedForm(null)
            }
        )
        .catch(
            (e) => {props.setOpenedForm(null); console.log(e)}
        )

    }

    return(
        <Wrapper onSubmit={createAddress}>
            <section>
            <label htmlFor="addresstype">Address Name
            <input name="addresstype" onChange={alterardados}/>
            </label>
            <label htmlFor="country">Country
            <input name="country" onChange={alterardados}/>
            </label>
            <label htmlFor="state">State
            <input name="state" onChange={alterardados}/>
            </label>
            <label htmlFor="city">City
            <input name="city" onChange={alterardados}/>
            </label>
            </section>
            <section>
            <label htmlFor="zipcode">Zip Code
            <input name="zipcode" onChange={alterardados}/>
            </label>
            <label htmlFor="street">Street
            <input name="street" onChange={alterardados}/>
            </label>
            <div>
            <label htmlFor="number">Number
            <input name="number" onChange={alterardados}/>
            </label>
            <label htmlFor="complemento">Complement
            <input name="complemento" onChange={alterardados}/>
            </label>
            </div>
            <button type="submit">Create address</button>
            <button onClick={() => {setOpenedForm(null)}}>Cancel</button>
            </section>
        </Wrapper>
    )
}








const Wrapper = styled.form`
  display: flex;
  width: 100%;
  gap: 4%;

  h1 {
    font-size: 25px;
    color: black;
    margin: 0;
  }

  label {
    width: 100%;
    display: flex;
    flex-direction: column;
    color: black;
    font-size: 16px;
    gap: 10px;
  }
  label input {
    width: 100%;
    border: 0.5px solid black;
    display: flex;
    align-items: center;
    height: 40px;
    padding-left: 10px;
    color: black;
    background: white;
    margin-bottom: 20px;
  }

  button {
    background: #e6e2e1;
    display: flex;
    align-items: center;
    height: 30px;
    width: 100%;
    color: black;
    border: none;
    font-weight: bold;
    justify-content: center;
    font-size: 16px;
    margin-bottom: 10px;
  }

  button:nth-of-type(2){
    background-color: black;
    color: white;
  }

  div:nth-child(1){
    width: 25%;
  }
  div:nth-child(2){
    width: 75%
  }
  div{
    width: 100%;
    display: flex;
    gap: 5%;
  }

  section{
    width: 48%;
  }
`;
