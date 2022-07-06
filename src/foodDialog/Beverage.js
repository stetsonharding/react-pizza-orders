import React from "react";

export function Beverage({ openFood, beverageRadio }) {
  return (
    <>
      <h3>Choose a beverage</h3>
      {openFood.beverages.map((beverage) => (
        <>
          <input
            type="radio"
            id={beverage}
            name="beverage"
            value={beverage}
            checked={(beverageRadio.beverageValue = beverage)}
            onChange={beverageRadio.onChange}
          />
          <label htmlFor={beverage}>{beverage}</label>
        </>
      ))}
    </>
  );
}
