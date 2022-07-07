import { useState } from "react";

export function useBeverage(Default) {
  const [beverageValue, setBeverageValue] = useState(Default);

  function onChange(e) {
    // setBeverageValue(e.target.value)
    console.log("Hello");
  }

  return {
    beverageValue,
    onChange,
  };
}
