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

export function Toppings({ toppings }) {
  console.log(toppings);
  return (
    <ToppingContainer>
      {toppings.map((topping) => {
        return (
          <div key={topping.name}>
            <CheckboxLabel>
              <ToppingCheckbox onClick={() => console.log("hello")} />
              {topping.name}
            </CheckboxLabel>
          </div>
        );
      })}
    </ToppingContainer>
  );
}