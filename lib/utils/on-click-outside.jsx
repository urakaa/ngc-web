import { useEffect } from "react";

export function OnClickOutside(itemRef, action, enabled) {
  useEffect(() => {
    if (enabled) {
      let handler = (event) => {
        if (itemRef.current && !itemRef.current.contains(event.target)) {
          action();
        }
      };

      document.addEventListener("mousedown", handler);

      return () => {
        document.removeEventListener("mousedown", handler);
      };
    }
  });
}
