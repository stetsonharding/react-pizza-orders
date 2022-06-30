import React from "react";
import styled from "styled-components";

const ToppingContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const ToppingCheckbox = styled.input.attrs({ type: "checkbox" })`
  margin-right: 10px;
  cursor: pointer;
`;

const CheckboxLabel = styled.label`
  font-weight: bold;
  font-size: 14px;
  letter-spacing: 1px;
`;

export function Toppings() {
  return (
    <ToppingContainer>
      <div>
        <CheckboxLabel>
          <ToppingCheckbox />
          <span>Pepporoni</span>
        </CheckboxLabel>
      </div>
    </ToppingContainer>
  );
}
