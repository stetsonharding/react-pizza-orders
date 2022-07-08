import React from "react";
import styled from "styled-components";

const RadioInput = styled.input`
  cursor: pointer;
`;

const Label = styled.label`
  cursor: pointer;
`;

export function Beverage({ openFood, beverageRadio }) {
  return (
    <>
      <h3>Choose a beverage</h3>
      {openFood.beverages.map((beverage, index) => (
        <div key={index}>
          <RadioInput
            type="radio"
            id={beverage}
            name="beverage"
            value={beverage}
            checked={(beverageRadio.value = beverage)}
            onChange={beverageRadio.onChange}
          />
          <Label htmlFor={beverage}>{beverage}</Label>
        </div>
      ))}
    </>
  );
}
