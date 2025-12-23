import React from "react";
function SortDropdown({ selectedSort, onChangeSort }) {
  return (
    <select
      value={selectedSort}
      onChange={(e) => onChangeSort(e.target.value)}
      className="border px-2 py-1 rounded"
    >
      {SORT_OPTIONS.map((option) => (
        <option key={option.id} value={option.id}>
          {option.title}
        </option>
      ))}
    </select>
  );
}
