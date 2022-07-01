import React from "react";
import styled from "styled-components";
import { Title } from "../styles/title";
import { blitzPizzaTheme } from "../styles/colors";

// const QuantityContainer = styled.div`
//   height: 75px;
//   border: 2px solid red;
// `;

const QuantityInputStyled = styled.input`
  font-size: 18px;
  width: 24px;
  text-align: center;
  border: none;
  outline: none;
`;

const IncrementContainer = styled(Title)`
  display: flex;
  align-items: center;
  height: 50px;
`;

const IncrementBtn = styled.div`
  width: 24px;
  border: 2px solid ${blitzPizzaTheme};
  color: black;
  text-align: center;
  margin: 0 10px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  ${({ disabled }) =>
    disabled &&
    `opacity: 0.5;
pointer-events: none
`};
  &:hover {
    background-color: #ffe3e3;
  }
`;

export function QuantityInput({ quantity }) {
  const decrementQuantity = () => {
    quantity.setValue((prevState) => prevState - 1);
  };

  const incrementQuantity = () => {
    quantity.setValue((prevState) => prevState + 1);
  };

  return (
    <IncrementContainer>
      <div>Quantity: </div>
      <IncrementBtn disabled={quantity.value == 1} onClick={decrementQuantity}>
        -
      </IncrementBtn>
      <QuantityInputStyled {...quantity} />
      <IncrementBtn onClick={incrementQuantity}> + </IncrementBtn>
    </IncrementContainer>
  );
}
