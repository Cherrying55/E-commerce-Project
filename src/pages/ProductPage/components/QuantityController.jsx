import { useState } from "react";
import styled from "styled-components";

export function QuantityController() {
  const [quantity, setQuantity] = useState(1);

  function handleManualChange(e) {
    if (e.target.value === Number(e.target.value)) {
      setQuantity(e.target.value);
    }
  }

  function subtract() {
    if (quantity - 1 > 0) {
      setQuantity(quantity - 1);
    }
  }

  function add() {
    setQuantity(quantity + 1);
  }

  return (
    <Container>
      <button className="quantitybutton" onClick={subtract}>
        -
      </button>
      <input onChange={handleManualChange} type="text" value={quantity} />
      <button className="quantitybutton" onClick={add}>
        +
      </button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 3px;
  justify-content: flex-start;
  margin-top: 15px;

  button.quantitybutton,
  input {
    width: 40px;
    height: 40px;
    border: 1px solid black;
    padding: 5px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0;
    margin-right: 0;
    text-align: center;
    margin: 0;
  }

  button.quantitybutton {
    background: gray;
  }
`;
