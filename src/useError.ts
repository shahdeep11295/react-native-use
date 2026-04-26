import { useCallback, useEffect, useState } from 'react';

export const useError = (): ((err: Error) => void) => {
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (error) {
      throw error;
    }
  }, [error]);

  const dispatchError = useCallback((err: Error) => {
    setError(err);
  }, []);

  return dispatchError;
};
