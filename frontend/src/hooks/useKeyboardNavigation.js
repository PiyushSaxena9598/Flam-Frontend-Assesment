import { useEffect } from "react";

export default function useKeyboardNavigation(
  previous,
  next
) {
  useEffect(() => {
    function handleKey(e) {
      if (e.key === "ArrowLeft") {
        previous();
      }

      if (e.key === "ArrowRight") {
        next();
      }
    }

    window.addEventListener("keydown", handleKey);

    return () =>
      window.removeEventListener(
        "keydown",
        handleKey
      );
  }, [previous, next]);
}