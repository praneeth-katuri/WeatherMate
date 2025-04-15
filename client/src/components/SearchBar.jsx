import useAutocomplete from "../hooks/useAutocomplete";
import { useState, useEffect, useRef } from "react";

function SearchBar({ city, setCity, onSearch, loading }) {
  const { suggestions } = useAutocomplete(city);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const wrapperRef = useRef(null);

  const handleInputChange = (e) => {
    setCity(e.target.value);
    setShowSuggestions(true);
    setHighlightedIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (!showSuggestions || suggestions.length === 0) {
      if (e.key === "Enter") {
        onSearch();
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prev) => (prev + 1) % suggestions.length);
        break;

      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex(
          (prev) => (prev - 1 + suggestions.length) % suggestions.length
        );
        break;

      case "Enter":
        if (highlightedIndex >= 0) {
          const selected = suggestions[highlightedIndex];
          setCity(`${selected.city}, ${selected.countryCode}`);
          setShowSuggestions(false);
        } else {
          onSearch();
        }
        break;

      case "Escape":
        setShowSuggestions(false);
        break;

      default:
        break;
    }
  };

  const handleSuggestionClick = (s) => {
    setCity(`${s.city}, ${s.countryCode}`);
    setShowSuggestions(false);
  };

  useEffect(() => {
    if (highlightedIndex >= 0) {
      const item = document.getElementById(`suggestion-${highlightedIndex}`);
      item?.scrollIntoView({ block: "nearest" });
    }
  }, [highlightedIndex]);

  // Hide dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!wrapperRef.current?.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full max-w-xl mx-auto mb-6">
      <div className="flex gap-2">
        <input
          type="text"
          value={city}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Enter city name..."
          className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onFocus={() => city && setShowSuggestions(true)}
        />
        <button
          onClick={onSearch}
          disabled={loading}
          className="bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold disabled:bg-gray-400"
        >
          {loading ? "..." : "Search"}
        </button>
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute z-20 w-full bg-white border border-gray-200 rounded-md shadow-lg mt-1 max-h-52 overflow-auto">
          {suggestions.map((s, i) => (
            <li
              id={`suggestion-${i}`}
              key={`${s.city}-${s.countryCode}`}
              onClick={() => handleSuggestionClick(s)}
              className={`px-4 py-2 cursor-pointer transition-all ${
                i === highlightedIndex ? "bg-blue-100" : "hover:bg-gray-100"
              }`}
            >
              {s.city}, {s.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
