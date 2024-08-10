// src/components/SearchBar.jsx
function SearchBar({ city, setCity, onSearch, loading }) {
  return (
    <div className="flex gap-4 items-center mb-6">
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSearch()}
        className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={onSearch}
        disabled={loading}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold disabled:bg-gray-400"
      >
        {loading ? (
          <div className="spinner-border text-white"></div> // Add Tailwind spinner styles
        ) : (
          "Search"
        )}
      </button>
    </div>
  );
}

export default SearchBar;
