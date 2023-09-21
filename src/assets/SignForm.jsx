import styled from "styled-components";


const SignForm = styled.form`
display: flex;
flex-direction: column;
width: 50%;

h1{
    font-size: 25px;
    color: black;
    margin: 0;
}

label{
    width: 100%;
    display: flex;
    flex-direction: column;
    color: black;
    font-size: 16px;
    gap: 10px;
}
label input{
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

button{
    background: #e6e2e1;
    display: flex;
    align-items: center;
    height: 40px;
    color: black;
    border: none;
    font-weight: bold;
    justify-content: center;
    font-size: 16px;

}
`

export default SignForm