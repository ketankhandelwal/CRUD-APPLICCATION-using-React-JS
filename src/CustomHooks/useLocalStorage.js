import { useEffect, useState } from "react";

function getSavedValue(key, initialValue) {
  const savedValue = localStorage.getItem(key);
  if (savedValue) return savedValue;

  return initialValue;
}

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  useEffect( () => {
    localStorage.setItem(key, value);
  }, [value]);

  return [value, setValue];
}
