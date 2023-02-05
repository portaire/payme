import { useCallback, useEffect } from "react";

const useEscClicked = (callback) => {
  const escFunction = useCallback((event) => {
    if (event.key === "Escape") {
      callback();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);
};

export default useEscClicked;
