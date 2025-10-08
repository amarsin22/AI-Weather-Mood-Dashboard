import React from 'react';

interface Props {
  city: string;
  setCity: (value: string) => void;
  onSearch: () => void;
}

const SearchBar: React.FC<Props> = ({ city, setCity, onSearch }) => {
  return (
    <form
      className="search-bar"
      onSubmit={(e) => {
        e.preventDefault();
        onSearch();
      }}
    >
      <input
        type="text"
        placeholder="Enter city (e.g. Delhi, London)"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default SearchBar;
