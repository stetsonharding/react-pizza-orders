import { useState } from "react";
export function useQuanity(defaultQuantity) {
  const [quantity, setQuantity] = useState(1);

  function onChange(e) {
    if (+e.target.value > 1) {
      setQuantity(e.target.value);
    }

    console.log(e.target.value);
  }

  return {
    quantity,
    setQuantity,
    onChange,
  };
}
