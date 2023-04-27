import React, { Component } from "react";
import "./item-status-filter.css";

const buttonsFilte = [
  { name: "all", label: "All" },
  { name: "active", label: "Active" },
  { name: "done", label: "Done" },
];

const ItemStatusFilter = ({ filter, onFilterChanghe = () => {} }) => {
  const buttons = buttonsFilte.map(({ name, label }) => {
    const isActive = name === filter;
    const className = "btn" + (isActive ? "btn-info" : "btn-outline-secondary");

    return (
      <button
        key={name}
        type="button"
        onClick={() => onFilterChanghe(name)}
        className={className}
      >
        {label}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
};

export default ItemStatusFilter;
