import SignForm from "../assets/SignForm";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function EditProfileForm(props){

    const [dados, setDados] = useState({password: "", newpassword: ""})
    const filter = useSelector(state => state.userReducer.currentUser)
    const navigate =useNavigate()

    function alterardados(e) {
        let newobj = { ...dados };
        newobj[e.target.name] = e.target.value;
        setDados({ ...newobj });
    }

    function changepassword(e){
        e.preventDefault()
        axios.post(`http://localhost:4000/auth/changepassword`, dados, {headers:{
            "Authorization": `Bearer ${filter.token}`
        }})
        .then(
            (res) => {
                props.setOpenedForm(null)
                navigate("/membership")
            }
        )
        .catch(
            (e) => {props.setOpenedForm(null); console.log(e)}
        )

    }

      
    return(
        <SignForm onSubmit={changepassword}>
            <label for="password">Current Password
                <input 
                type="password" 
                name="password" 
                placeholder="Current password..." 
                onChange={alterardados}
                />
            </label>
            <label for="newpassword">New Password
                <input 
                type="password" 
                placeholder="New password..." 
                name="newpassword"
                onChange={alterardados}
                />
            </label>
            <button type="submit">Change Password</button>
        </SignForm>
    )
}