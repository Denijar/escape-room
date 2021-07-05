import { useCallback } from "react";
import axios from "axios";

export default function useGet() {
  const get = useCallback(async (url, config = {}) => {
    try {
      const axiosResponse = await axios.get(url, config);
      return { response: axiosResponse, error: null };
    } catch (error) {
      return { response: null, error };
    }
  }, []);

  return get;
}
