import React from 'react';
import "./SortBar.css"

function SortBar({ onSortChange, onFilterChange }) {
  return (
    <div className="sort-bar">
      <select onChange={(e) => onSortChange(e.target.value)}>
        <option value="">Sort by...</option>
        <option value="health">Health</option>
        <option value="damage">Damage</option>
        <option value="armor">Armor</option>
      </select>
      <select multiple onChange={(e) => onFilterChange([...e.target.selectedOptions].map(o => o.value))}>
        <option value="Support">Support</option>
        <option value="Medic">Medic</option>
        <option value="Assault">Assault</option>
        <option value="Defender">Defender</option>
        <option value="Captain">Captain</option>
        <option value="Witch">Witch</option>
      </select>
    </div>
  );
}

export default SortBar;