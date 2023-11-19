import { useCallback, useState } from "react";

export const useCounter = (n: number) => {
  const [count, setCount] = useState<number>(n);

  const addCount = useCallback(() => setCount((v) => v + 1), []);

  const minusCount = useCallback(() => setCount((v) => v - 1), []);

  return { count, addCount, minusCount };
};
