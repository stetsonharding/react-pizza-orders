import { useState } from "react";

export function useBeverage(defaultChoice) {
  const [beverageValue, setBeverageValue] = useState(defaultChoice);

  function onChange(e) {
    setBeverageValue(e.target.value);
    console.log("hi");
  }

  return {
    beverageValue,
    onChange,
  };
}
