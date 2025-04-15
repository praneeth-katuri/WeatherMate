import { useState, useEffect } from "react";

function useAutocomplete(query) {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }

    const debounce = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/autocomplete?query=${query}`);
        const data = await res.json();
        setSuggestions(data);
      } catch (err) {
        console.error("Autocomplete fetch failed", err);
        setSuggestions([]);
      } finally {
        setLoading(false);
      }
    }, 300); // debounce delay

    return () => clearTimeout(debounce);
  }, [query]);

  return { suggestions, loading };
}

export default useAutocomplete;
