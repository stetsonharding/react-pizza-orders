import { useState } from "react";
export function useQuanity(defaultQuantity) {
  const [value, setValue] = useState(defaultQuantity || 1);

  function onChange(e) {
    if (!(+e.target.value >= 1)) {
      setValue((prevState) => 1);
      return;
    }
    setValue(e.target.value);
    parseInt(e.target.value);
  }

  return {
    value,
    setValue,
    onChange,
  };
}
