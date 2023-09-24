import styled from "styled-components"


export function Order() {
    //will have trash ion-icon
  
    return (
      <ItemContainer>
        <img src="https://i.imgur.com/zXfm0q3.jpg" />
        <div>
        <h1>
            Order 13183183192
          </h1>
          <h1>
            Black top skirt with golden <span>Status: Awaiting Shipping</span>
          </h1>
          
          <h2>Color: Blue <span>Quantity: 2</span></h2>
          <h2>Size: WOMEN P</h2>
          <h1>Price: $50</h1>
        </div>
      </ItemContainer>
    );
  }
  
  const ItemContainer = styled.div`
    display: flex;
    gap: 5px;
    margin-bottom: 30px;

    img {
      width: 128px;
    }
    width: 100%;
  
    div {
      display: flex;
      flex-direction: column;
      gap: 8px;
      width: 100%;
    }
  
    div h1, div h2 {
      font-size: 18px;
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
  
    h1 {
      font-weight: bold;
      margin-bottom: 0;
    }

    h1:nth-of-type(2){
        margin-bottom: 5px;
    }
  
    span {
      font-size: 16px;
    }
  `;
  