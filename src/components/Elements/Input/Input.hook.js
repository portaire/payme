import { useEffect, useState } from "react";

const useInput = (value) => {
  const [error, setError] = useState("");

  useEffect(() => {
    if (!value || value === "") {
      setError("Field can't be empty");
    } else {
      setError("");
    }
  }, [value]);

  return { error };
};

export default useInput;
