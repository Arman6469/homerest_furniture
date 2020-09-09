import React from "react";

export default function SearchBar({ setSearch }) {
  return (
    <div className="ui icon input">
      <i className="search icon"></i>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
