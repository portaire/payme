import useSWRMutation from 'swr/mutation';
import { API_URL } from 'consts/env';

export const useSendApiData = (endpoint: string) => {
  const { error, isMutating, trigger, reset } = useSWRMutation(
    `${API_URL}/${endpoint}}`,
    async (url: string, { arg }) => {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(arg),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await response.json();

      return json;
    }
  );

  return {
    error,
    isMutating,
    trigger,
    reset,
  };
};
