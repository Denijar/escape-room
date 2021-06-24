import { useEffect, useState } from "react";
import axios from "axios";

export default function useGet<Type>(url: string, config = {}) {
  const [response, setResponse] = useState<Type | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const [refetch, setRefetch] = useState<boolean>(false);

  const handleRefetch = () => {
    setRefetch(!refetch);
  };

  useEffect(() => {
    async function performGet() {
      setLoading(true);
      try {
        const axiosResponse = await axios.get<Type>(url, config);
        setResponse(axiosResponse.data);
        setError(null);
      } catch (e) {
        setError(e);
        setResponse(null);
      }
      setLoading(false);
    }
    performGet();
  }, [refetch]);

  return { response, error, loading, refetch: handleRefetch };
}
