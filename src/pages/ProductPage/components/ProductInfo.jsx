import styled from "styled-components";
import { Color } from "../assets/Color";
import { Size } from "../assets/Size";
import { QuantityController } from "./QuantityController";

export function ProductInfo() {
  return (
    <Container>
      <h1>Extra Fine Merino V-Neck Long-Sleeve Sweater</h1>
      <h2>$500</h2>
      <h4>Tax included. Shipping calculated at checkout. </h4>
      <h3>Color</h3>
      <ColorContainer>
        <Color color="black" />
        <Color color="red" />
        <Color color="blue" />
      </ColorContainer>
      <h3>Size</h3>
      <SizeContainer>
        <Size>L</Size>
        <Size>M</Size>
      </SizeContainer>
      <h3>Quantity</h3>
      <QuantityController />
      <button>ADD TO CART</button>
    </Container>
  );
}

const ColorContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
`;

const SizeContainer = ColorContainer;

const Container = styled.div`
  width: 40%;

  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 22px;
    margin-bottom: 15px;
  }

  h4 {
    font-size: 16px;
    margin-bottom: 25px;
  }

  h3 {
    font-size: 18px;
    margin-bottom: 15px;
  }

  button {
    background: black;
    display: flex;
    align-items: center;
    height: 40px;
    color: white;
    border: none;
    font-weight: bold;
    justify-content: center;
    font-size: 16px;
    padding: 10px;
    width: 80%;
    margin-top: 20px;
  }
`;
