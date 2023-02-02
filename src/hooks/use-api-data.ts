import useSWR from 'swr';
import { API_URL } from 'consts/env';

export const useApiData = (endpoint: string) => {
  const { data, error, isLoading } = useSWR(`${API_URL}/${endpoint}`, async (url) => {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  });

  return {
    data,
    error,
    isLoading,
  };
};
