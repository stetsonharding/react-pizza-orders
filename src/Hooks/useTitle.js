import { useEffect } from "react";

export function useTitle({ order, openFood }) {
  useEffect(() => {
    if (openFood) {
      document.title = openFood.name;
    } else {
      document.title = "Hungry?";
    }
  });
}
