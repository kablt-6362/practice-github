import React from "react";

export default function ListItem({ item, onClick }) {
  return (
    <div>
      <button
        onClick={() => {
          onClick(item.name);
        }}
      >
        No.{item.id} {item.name}
      </button>
    </div>
  );
}
