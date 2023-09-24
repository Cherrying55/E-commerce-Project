import styled from "styled-components"

export function CreditCard(){

    return(
        <CreditContainer>
            <div>
            <h2>PAN</h2>
                <h3>***123</h3>
                <h2>Card holder</h2>
                <h3>John Doe</h3>
            </div>
            <div>
                <h2>Expiration date</h2>
                <h3>02/28</h3>
                <button>Edit</button>
                <button>Delete</button>
                </div>
        </CreditContainer>
    )
}

const CreditContainer = styled.div`
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