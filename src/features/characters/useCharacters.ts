import { useEffect, useState } from "react";
import { Character } from "./types";
import * as charactersApi from "./charactersApi";

export const useCharacters = (urls: string[]) => {
  const [data, setData] = useState<Character[]>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      const results = await charactersApi.fetchAll(urls);
      setLoading(false);

      const hasErrors = results.some((result) => result.status !== 200);
      if (hasErrors) {
        setError("An error occured");
      } else {
        const characters = results.map((result) => result.data);
        setData(characters);
      }
    };

    fetchResults();
  }, [urls]);

  return { data, error, loading };
};
