import React from "react";
import styled from "styled-components";

const QuantityContainer = styled.div`
  height: 75px;
  border: 2px solid red;
`;

const QuantityInputStyled = styled.input`
  font-size: 18px;
`;

export function QuantityInput({ quantity }) {
  return (
    <QuantityContainer>
      <div>Quantity:</div>
      <QuantityInputStyled {...quantity} />
    </QuantityContainer>
  );
}
