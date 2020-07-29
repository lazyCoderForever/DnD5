import { useState, useCallback } from "react";
import M from "materialize-css";

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const request = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setLoading(true);
      try {
        if (body) {
          body = JSON.stringify(body);
          headers["Content-Type"] = "application/json";}
        const response = await fetch(url, { method, body, headers });
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || "Что-то пошло нет так");
        }
        setLoading(false);
        return data;
      } catch (e) {setLoading(false);
        setError(e.message);
        M.toast({ html: `${e.message}` });
        throw e;
      }
    }, []);
  return { loading, error, request };};
