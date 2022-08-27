import React from "react";
import styled from "styled-components";

const ToppingContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
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

export function Toppings({ toppings, checkTopping }) {
  return (
    <ToppingContainer>
      {toppings.map((topping, index) => {
        return (
          <div key={topping.name}>
            <CheckboxLabel>
              <ToppingCheckbox
                checked={topping.checked}
                onChange={() => checkTopping(index)}
              />
              {topping.name}
            </CheckboxLabel>
          </div>
        );
      })}
    </ToppingContainer>
  );
}
