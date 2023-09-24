
import styled from "styled-components"
export function Address(){
    return(
        <AddressContainer>
            <div>
                <h2>Type</h2>
                <h3>Home</h3>
                <h2>Country</h2>
                <h3>Canada</h3>
            </div>
            <div>
            <h2>State</h2>
                <h3>Ontario</h3>
                <h2>City</h2>
                <h3>Toronto</h3>
            </div>
            <div>
                <h2>Zip code</h2>
                <h3>1003103</h3>
                <h2>Street</h2>
                <h3>Random street</h3>
                <h2>Number</h2>
                <h3>103</h3>
            </div>
            <div>
                <h2>Complement</h2>
                <h3>Room 404</h3>
                <button>Edit</button>
                <button>Delete</button>
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
height: 280px;
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
    
      h3 {
        font-size: 16px;
        margin-bottom: 20px;
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
