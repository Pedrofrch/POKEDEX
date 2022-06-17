import { useEffect, useState } from "react";
import axios from "axios";

export const Datapoke = (url) => {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getPokemons = async (url) => {
    setIsLoading(true);
    try {
      const res = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setData(res.data);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.log(error);
      setError(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getPokemons(url);
  }, [url]);
  return [data, isLoading, error];
};
