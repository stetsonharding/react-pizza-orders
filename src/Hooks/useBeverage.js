import { useState } from "react";

export function useBeverage(defaultChoice) {
  const [beverageValue, setBeverageValue] = useState(defaultChoice);

  console.log(beverageValue);

  function onChange(e) {
    setBeverageValue(e.target.value);
  }

  return {
    beverageValue,
    onChange,
  };
}
